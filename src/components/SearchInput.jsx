import React from "react";
import styled from "styled-components";

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

const History = styled.div`
  min-width: 60vw;
  font-size: 16px;
`;

function SearchInput({ setKeyword }) {
  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <Container>
      <Input
        type="search"
        placeholder="키워드를 입력하세요."
        onChange={handleInputChange}
      />
      <History>Keyword History</History>
    </Container>
  );
}

export default SearchInput;

// checklist
// 1. input을 입력했다가 다시 모두 지우면 검색 결과를 다시 없얘야 할 듯
// 2. input foucs 되었을 때 좀 괜찮아 보이게 스타일링해야 함

// 4. useEffect dependency에서 API KEY 부분 고민할 것

// dropdown의 현재 문제점
// 1. 지금 드랍다운은 내가 지정한 history 값이 아니라 그냥 브라우저에 해당하는 값 가져옴
// 2. 현재는 focus했을 때 뜨는 게 아니라 focus 되어 있어도 값을 입력하면 드랍다운은 날라감
