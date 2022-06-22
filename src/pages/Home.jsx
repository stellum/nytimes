import { useState, useEffect } from "react";
import PageNaming from "../hoc/PageNaming";
import NewsList from "../components/NewsList";
import SearchInput from "../components/SearchInput";
import FetchMore from "../components/FetchMore";
import { Image } from "../components/image";
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

  useEffect(() => {
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
  return (
    <div>
      <SearchInput setKeyword={setKeyword} />
      <NewsList news={news} />
      <Image setPage={setPage} page={page} loading={loading} />
    </div>
  );
}
export default PageNaming(Home, "Home");
