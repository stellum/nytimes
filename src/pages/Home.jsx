import { useState, useEffect } from "react";
import PageNaming from "../hoc/PageNaming";
import NewsList from "../components/NewsList";
import SearchInput from "../components/SearchInput";

function Home() {
  const [keyword, setKeyword] = useState("");
  const [news, setNews] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

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
      const searchTimeout = setTimeout(getArticle, 500);
      return () => {
        clearTimeout(searchTimeout);
      };
    } else {
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
    </div>
  );
}

export default PageNaming(Home, "Home");

// const [history, setHistory] = useState(
//   JSON.parse(localStorage.getItem("history")) || []
// );

// const saveStorage = () => {
//   let storage = JSON.parse(localStorage.getItem("history"));
//   console.log(storage);
//   if (storage) {
//     setHistory([keyword, ...storage]);
//   } else {
//     setHistory([keyword]);
//   }
// };

// useEffect(() => {
//   const getArticle = async () => {
//     const api = await fetch(
//       `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${process.env.REACT_APP_API_KEY}&sort=newest`
//     );
//     const data = await api.json();
//     setNews(data.response.docs);
//     saveStorage();
//   };
//   if (keyword) {
//     const searchTimeout = setTimeout(getArticle, 500);
//     return () => {
//       clearTimeout(searchTimeout);
//     };
//   } else {
//     setNews([]);
//   }
// }, [keyword]);

// useEffect(() => {
//   localStorage.setItem("history", JSON.stringify(history));
//   console.log(history);
// }, [history]);
