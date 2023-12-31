import React from 'react';
import styled from 'styled-components';
import News from './News';

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 799px) {
    align-content: center;
    flex-direction: column;
  }
`;
function NewsList({ news }) {
  return (
    <Container>
      {news.map((news) => {
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
