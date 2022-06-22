import React, { useState, useRef } from "react";
import styled from "styled-components";
import History from "./History";

const Container = styled.div`
  max-width: 100vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  min-width: 60vw;
  font-size: 30px;
  padding: 10px 5px;
  margin-bottom: 20px;
  margin-top: 40px;

  // focus 상태
  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }
`;

function SearchInput({ setKeyword }) {
  const [inputFocus, setInputFocus] = useState(false);

  let inputRef = useRef();

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleFocus = () => {
    setInputFocus(true);
  };

  const handleFocusOut = () => {
    setInputFocus(false);
  };

  return (
    <Container>
      <Input
        type="search"
        placeholder="키워드를 입력하세요."
        ref={inputRef}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleFocusOut}
      />
      <History inputFocus={inputFocus} inputRef={inputRef} />
    </Container>
  );
}

export default SearchInput;

// checklist
// 1. focus 상태 out되었을때 처리 필요
// 2. localStorage 함수 저장 함수 fix
