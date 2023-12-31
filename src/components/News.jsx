import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// library
import styled from 'styled-components';
import {
  format,
  differenceInDays,
  differenceInHours,
  parseISO,
} from 'date-fns';

// CSS
const Card = styled.div`
  box-shadow: 1px 0px 4px 2px rgba(0, 0, 0, 0.14);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  max-width: 600px;

  @media screen and (min-width: 800px) {
    min-width: 600px;
  }
  @media screen and (max-width: 799px) {
    margin-right: 0;
    min-width: 424px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  margin-right: 5px;
  border: none;
  width: 70px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid royalblue;
  background-color: ${(props) => (props.contained ? 'white' : 'royalblue')};
  color: ${(props) => (props.contained ? 'royalblue' : 'white')};
  transition: background-color 0.2s;
  position: absolute;
  bottom: 20px;
  right: ${(props) => (props.clip ? '95px' : '20px')};

  &:hover {
    background-color: royalblue;
    color: white;
  }
  &:active {
    transform: scale(0.98);
  }
`;
const TimeDiv = styled.div`
  font-size: 0.8rem;
  display: flex;
  margin-bottom: 20px;
  .write {
    font-weight: 500;
    margin-right: 10px;
    color: #656565;
  }
  .lasttime {
    color: #7d7d7d;
  }
`;
const Abstract = styled.div`
  padding: 40px 0;
`;
// Functions
const clipCheck = (clipped, _id) => {
  return !clipped.some((storeData) => storeData._id === _id);
};

const dateFunc = (pub_date) => {
  if (Math.abs(differenceInDays(parseISO(pub_date), new Date())) > 0) {
    return (
      Math.abs(differenceInDays(parseISO(pub_date), new Date())) + ' 일 전'
    );
  } else {
    return (
      Math.abs(differenceInHours(parseISO(pub_date), new Date())) + ' 시간 전'
    );
  }
};

function News({ headline, abstract, date, _id, web_url }) {
  const dispatch = useDispatch();
  const clipped = useSelector((state) => state.addClip.clip);

  const handleAddClip = (date, headline, abstract, _id, web_url) => {
    const payload = {
      date: format(parseISO(date), 'yyyy.MM.dd HH:mm'),
      headline,
      abstract,
      _id,
      web_url,
    };
    if (!clipped.length || clipCheck(clipped, _id)) {
      dispatch({ type: 'ADD_CLIP', payload });
    } else {
      dispatch({ type: 'UN_CLIP', payload: { _id } });
    }
  };

  return (
    <Card>
      <h2>{headline}</h2>
      <TimeDiv>
        <div className='write'>
          입력 {format(parseISO(date), 'yyyy.MM.dd HH:mm')}
        </div>
        <div className='lasttime'>{dateFunc(date)}</div>
      </TimeDiv>
      <Abstract style={{ marginBottom: '20px' }}>{abstract}</Abstract>
      <Button
        type='button'
        onClick={() => {
          handleAddClip(date, headline, abstract, _id, web_url);
        }}
        contained={clipCheck(clipped, _id)}
        clip='true'
      >
        {clipCheck(clipped, _id) ? 'Clip' : 'UnClip'}
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
