import React from "react";
import styled from "styled-components";
import News from "./News";

const Container = styled.div`
  max-width: 1780px;
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
  // console.log(news);
  return (
    <Container>
      {news.map((newsData) => {
        return (
          <News
            key={newsData._id}
            _id={newsData._id}
            headline={newsData.headline.main}
            abstract={newsData.abstract}
            pub_date={newsData.pub_date}
            web_url={newsData.web_url}
            multimedia={newsData.multimedia[0]?.url}
            news_desk={newsData.news_desk}
          />
        );
      })}
    </Container>
  );
}

export default NewsList;
