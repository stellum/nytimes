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
function ClipList({ clip, clipped }) {
  return (
    <Container>
      {clipped.map((clip) => {
        return (
          <News
            key={clip._id}
            _id={clip._id}
            headline={clip.headline.main}
            abstract={clip.abstract}
            date={clip.pub_date}
            web_url={clip.web_url}
          />
        );
      })}
    </Container>
  );
}

export default ClipList;