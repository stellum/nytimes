import React from 'react';
import styled from 'styled-components';
import News from './News';
import { useSelector } from 'react-redux';

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 799px) {
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
`;
function NewsList() {
  const newsData = useSelector((news) => news.addNewsReducer.docs);
  return (
    <Container>
      {/* {data.slice(0, 3).map((item) => {
        return (
          <News
            key={item.id}
            headLine={item.headLine}
            abstract={item.abstract}
            date={item.date}
          />
        );
      })} */}
      {newsData.map((news) => {
        return (
          <News
            key={news._id}
            _id={news._id}
            headline={news.headline.main}
            abstract={news.abstract}
            date={news.pub_date}
            web_url={news.web_url}
          />
        );
      })}
    </Container>
  );
}

export default NewsList;
