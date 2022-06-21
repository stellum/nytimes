import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 60vw;
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

const List = styled.li`
  list-style-type: none;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const History = (inputFoucs) => {
  let history = JSON.parse(localStorage.getItem("history"));

  const historyRemove = () => {
    localStorage.removeItem("history");
    history = JSON.parse(localStorage.getItem("history"));
  };

  if (history) {
    return (
      <Container>
        <Header>
          <Title>최근 검색어</Title>
          <Button onClick={historyRemove}>기록 삭제</Button>
        </Header>
        {history.map((keyword, index) => {
          return (
            <ul>
              <List key={index}>✔{keyword}</List>
            </ul>
          );
        })}
      </Container>
    );
  }
};

export default History;

// {history.map((keyword, index) => {
//   return (
//     <ul>
//       <List key={index}>{keyword}</List>
//     </ul>
//   )
// })}
