import { useState, useEffect } from 'react';

import NewsList from '../components/NewsList';
import SearchInput from '../components/SearchInput';
function Home() {
  const [keyword, setKeyword] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getArticle = async () => {
      const api = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=gWFMG5lVIXnJzkE3sellELj5mKHcYlgM`
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
