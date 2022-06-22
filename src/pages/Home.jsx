import { useState, useEffect } from "react";
import PageNaming from "../hoc/PageNaming";
import NewsList from "../components/NewsList";
import SearchInput from "../components/SearchInput";
import FetchMore from "../components/FetchMore";
import axios from "axios";
function Home() {
  const [keyword, setKeyword] = useState("");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getArticle = async () => {
    let cancel;
    await axios({
      method: "GET",
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`,
      params: { q: keyword, sort: "newest", page },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNews((prev) => [...prev, ...res.data.response.docs]);
        setLoading(false);
        saveStorage();
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
      });
  };
  useEffect(() => {
    setNews([]);
  }, [keyword]);

  useEffect(() => {
    if (keyword && !loading) {
      const searchTimeout = setTimeout(() => {
        setLoading(true);
        getArticle();
      }, 500);
      return () => {
        clearTimeout(searchTimeout);
      };
    }
  }, [keyword, page]);

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history"))
  );
  const saveStorage = () => {
    let storage = JSON.parse(localStorage.getItem("history"));

    const isDuplicate = (item) => item !== keyword;

    if (storage) {
      if (storage.every(isDuplicate)) {
        if (storage.length === 5) {
          storage.pop(4);
        }
      } else {
        return;
      }
      setHistory([keyword, ...storage]);
    } else {
      setHistory([keyword]);
    }
  };
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <div>
      <SearchInput setKeyword={setKeyword} />
      <NewsList news={news} />
      <FetchMore loading={loading} setPage={setPage} />
    </div>
  );
}
export default PageNaming(Home, "Home");
