import React, { useState, useEffect } from "react";
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

const History = ({ inputFocus, inputRef }) => {
  const [record, setRecord] = useState(
    JSON.parse(localStorage.getItem("history"))
  );

  let tempRecord = localStorage.getItem("history");

  useEffect(() => {
    setRecord(JSON.parse(localStorage.getItem("history")));
  }, [tempRecord]);

  const historyRemove = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    localStorage.removeItem("history");
    setRecord();
  };

  if (record && inputFocus) {
    return (
      <Container>
        <Header>
          <Title>최근 검색어</Title>
          <Button onMouseDown={historyRemove}>기록 삭제</Button>
        </Header>
        {record.map((keyword, index) => {
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
