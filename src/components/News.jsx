import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Card = styled.div`
  box-shadow: 1px 0px 4px 2px rgba(0, 0, 0, 0.14);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 900px) {
    margin-right: 20px;
    width: 600px;
  }
  @media screen and (max-width: 899px) {
    margin-right: 0;
    min-width: 424px;
    max-width: 599px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  border: none;
  width: 70px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid royalblue;
  background-color: ${(props) => (props.contained ? 'white' : 'royalblue')};
  color: ${(props) => (props.contained ? 'royalblue' : 'white')};
  transition: background-color 0.2s;
  &:hover {
    background-color: royalblue;
    color: white;
  }
  &:active {
    transform: scale(0.98);
  }
`;

function News({ headline, abstract, date, _id, web_url }) {
  const dispatch = useDispatch();
  const clipped = useSelector((state) => state.addClipReducer.clip);
  const clipCheck = (clipped) => {
    return !clipped.some((storeData) => storeData._id === _id);
  };

  const handleAddClip = (date, headline, abstract, _id, web_url) => {
    const payload = {
      date,
      headline,
      abstract,
      _id,
      web_url,
    };
    if (!clipped.length) {
      dispatch({ type: 'ADD_CLIP', payload });
    } else {
      if (clipCheck(clipped)) {
        dispatch({ type: 'ADD_CLIP', payload });
      } else {
        dispatch({ type: 'UN_CLIP', payload: { _id } });
      }
    }
  };

  return (
    <Card>
      <h2>{headline}</h2>
      <figure>{date}</figure>
      <div>{abstract}</div>
      <Button
        type='button'
        onClick={() => {
          handleAddClip(date, headline, abstract, _id, web_url);
        }}
        contained={clipCheck(clipped)}
      >
        {clipCheck(clipped) ? 'Clip' : 'UnClip'}
      </Button>

      <a
        href={web_url}
        target='_blank'
        rel='noopener noreferrer'
        title='새창으로 열기'
      >
        <Button contained={true}>Link</Button>
      </a>
    </Card>
  );
}

export default News;
