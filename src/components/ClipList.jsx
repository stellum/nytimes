import React from "react";
import styled from "styled-components";
import News from "./News";

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

function ClipList({ clip }) {
  console.log(clip);
  return (
    <Container>
      {clip.map((news) => {
        return (
          <News
            key={news._id}
            _id={news._id}
            headline={news.headline}
            abstract={news.abstract}
            pub_date={news.pub_date}
            web_url={news.web_url}
            multimedia={news.multimedia}
          />
        );
      })}
    </Container>
  );
}

export default ClipList;
