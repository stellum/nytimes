import React from 'react';

function SearchInput({ setKeyword }) {
  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='검색어를 입력하세요.'
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default SearchInput;
