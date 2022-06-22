import { useState, useEffect } from "react";
import PageNaming from "../hoc/PageNaming";
import NewsList from "../components/NewsList";
import SearchInput from "../components/SearchInput";
import FetchMore from "../components/FetchMore";

function Home() {
  const [keyword, setKeyword] = useState("");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getArticle = async () => {
    setLoading(true);
    await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${API_KEY}&page=${page}&sort=newest`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews((prev) => [...prev, ...data.response.docs]);
        setLoading(false);
      });
  };
  useEffect(() => {
    setNews([]);
  }, [keyword]);

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
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
    const getArticle = async () => {
      const api = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${API_KEY}&sort=newest`
      );
      const data = await api.json();
      setNews(data.response.docs);
      saveStorage();
    };
    
    if (keyword) {
      setLoading(true);
      const searchTimeout = setTimeout(getArticle, 500);
      return () => {
        clearTimeout(searchTimeout);
      };
    } else {
      setLoading(false);
    }
  }, [keyword, page]);
      setNews([]);
    }
  }, [keyword]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
    console.log(history);
  }, [history]);

  return (
    <div>
      <SearchInput setKeyword={setKeyword} />
      <NewsList news={news} />
      <FetchMore loading={loading} setPage={setPage} page={page} />
    </div>
  );
}
export default PageNaming(Home, "Home");
