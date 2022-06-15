import React from "react";
import { useState, useEffect } from "react";

function SearchInput() {
  const [keyword, setKeyword] = useState("");
  const [news, setNews] = useState("");

  useEffect(() => {
    const getArticle = async () => {
      const api = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      await setNews(data.response.docs);
    };
    if (keyword) {
      const searchTimeout = setTimeout(getArticle, 500);
      return () => {
        console.log("clean-up");
        clearTimeout(searchTimeout);
      };
    }
  }, [keyword]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default SearchInput;
