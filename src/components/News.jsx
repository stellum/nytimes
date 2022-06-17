import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// functions
import { clipCheck, dateFunc } from '../functions/functions';

// library
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

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
  margin-bottom: 20px;
`;

function News(props) {
  // console.log(props);
  const dispatch = useDispatch();
  const clipped = useSelector((state) => state.addClip.clip);

  const handleAddClip = (props) => {
    if (!clipped.length || clipCheck(clipped, props._id)) {
      dispatch({ type: 'ADD_CLIP', payload: props });
    } else {
      dispatch({ type: 'UN_CLIP', payload: props });
    }
  };

  return (
    <Card>
      <h2>{props.headline}</h2>
      <TimeDiv>
        <div className='write'>
          입력 {format(parseISO(props.pub_date), 'yyyy-MM-dd HH:mm')}
        </div>
        <div className='lasttime'>{dateFunc(props.pub_date)}</div>
      </TimeDiv>
      <Abstract>{props.abstract}</Abstract>
      <Button
        type='button'
        onClick={() => {
          handleAddClip(props);
        }}
        contained={clipCheck(clipped, props._id)}
        clip='true'
      >
        {clipCheck(clipped, props._id) ? 'Clip' : 'UnClip'}
      </Button>

      <a
        href={props.web_url}
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
