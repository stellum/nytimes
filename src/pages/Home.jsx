import { useState, useEffect } from 'react';

import NewsList from '../components/NewsList';
import SearchInput from '../components/SearchInput';
function Home() {
  const [keyword, setKeyword] = useState('');
  const [news, setNews] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getArticle = async () => {
      const api = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${API_KEY}?sort=newest`
      );
      const data = await api.json();
      setNews(data.response.docs);
    };
    if (keyword) {
      const searchTimeout = setTimeout(getArticle, 500);
      return () => {
        console.log('clean-up');
        clearTimeout(searchTimeout);
      };
    }
  }, [keyword]);

  return (
    <div>
      <SearchInput setKeyword={setKeyword} />
      <NewsList news={news} />
    </div>
  );
}

export default Home;
