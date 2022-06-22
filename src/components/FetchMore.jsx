import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 auto;
`;
const FetchMore = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef();
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      setPage((page) => page + 1);
    }
  });
  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
  }, [loading]);
  return (
    <>
      <div id="fetchMore" ref={fetchMoreTrigger}>
        {loading && <Spinner />}
      </div>
    </>
  );
};
export default FetchMore;
