import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 60vw;
  display: flex;
  justify-content: flex-start;
`;

const Header = styled.div`
  width: 60vw;
`;

const Title = styled.strong`
  float: left;
`;

const Button = styled.button`
  float: left;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  margin-left: 10px;
  padding: 3px 7px;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: #ffffff;
  }
`;

const History = ({ inputFocus }) => {
  // let history = JSON.parse(localStorage.getItem("history"));

  let history = ["gold", "korea", "web"];

  const historyRemove = localStorage.removeItem("history");

  if (inputFocus) {
    return (
      <Container>
        <Header>
          <Title>최근 검색어</Title>
          <Button onClick={historyRemove}>기록 삭제</Button>
        </Header>
        {history.map((keyword) => {
          return (
            <ul>
              <li>{keyword}</li>
            </ul>
          );
        })}
      </Container>
    );
  }
};

export default History;
