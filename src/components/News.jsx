import React from "react";
import { useDispatch, useSelector } from "react-redux";

// functions
import { clipCheck, dateFunc } from "../functions/functions";

// library
import styled from "styled-components";
import { format, parseISO } from "date-fns";

// CSS
const Card = styled.div`
  box-shadow: 1px 0px 4px 2px rgba(0, 0, 0, 0.14);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  max-width: 900px;
  display: flex;

  @media screen and (min-width: 800px) {
    min-width: 900px;
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
  background-color: ${(props) => (props.contained ? "white" : "royalblue")};
  color: ${(props) => (props.contained ? "royalblue" : "white")};
  transition: background-color 0.2s;
  position: absolute;
  bottom: 20px;
  left: ${(props) => (props.clip ? "95px" : "20px")};

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
  margin-bottom: 50px;
  position: absolute;
  bottom: 20px;
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
  width: 450px;
`;

const Image = styled.div`
  width: 500px;
  height: 250px;
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;

  .thumbnail {
    object-fit: cover;
    object-position: top;
    width: 100%;
    text-align: center;
  }
`;
const Text = styled.div`
  width: 600px;
  height: 300px;
`;

function News(props) {
  const dispatch = useDispatch();
  const clipped = useSelector((state) => state.addClip.clip);

  const handleAddClip = (props) => {
    if (!clipped.length || clipCheck(clipped, props._id)) {
      dispatch({ type: "ADD_CLIP", payload: props });
    } else {
      dispatch({ type: "UN_CLIP", payload: props });
    }
  };

  return (
    <Card>
      <Text>
        <div>{props.news_desk}</div>
        <h2>{props.headline}</h2>
        <Abstract>{props.abstract}</Abstract>
        <TimeDiv>
          <div className="write">
            입력 {format(parseISO(props.pub_date), "yyyy-MM-dd HH:mm")}
          </div>
          <div className="lasttime">{dateFunc(props.pub_date)}</div>
        </TimeDiv>
        <Button
          type="button"
          onClick={() => {
            handleAddClip(props);
          }}
          contained={clipCheck(clipped, props._id)}
          clip="true"
        >
          {clipCheck(clipped, props._id) ? "Clip" : "UnClip"}
        </Button>

        <a
          href={props.web_url}
          target="_blank"
          rel="noopener noreferrer"
          title="새창으로 열기"
        >
          <Button contained={true}>Link</Button>
        </a>
      </Text>
      <Image>
        <img
          className="thumbnail"
          src={
            props.multimedia
              ? `https://www.nytimes.com/${props.multimedia}`
              : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
          }
        />
      </Image>
    </Card>
  );
}

export default News;
