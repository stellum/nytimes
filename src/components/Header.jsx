import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
 position: relative;
`;

const Button = styled.button`
  border: none;
  background-color: #555555;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  opacity: 0.6;
  position: absolute;
  cursor: pointer;
  right: 5%;
  top: 10%;
  &:hover {
      opacity: 1;
  }
`; 

const Logo = styled.img`
  width: 15%;
  display: block;
  margin: 30px auto;
`;

function Header() {
  let location = useLocation(); 
  const button = (
    <Button>{location.pathname === "/Clip" ? "Home" : "Clip"}</Button>
  );

  return (
    <Container>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/2560px-NewYorkTimes.svg.png"></Logo>
      {location.pathname === "/Clip" ? (
        <Link to="/" rel="noopener noreferrer">
          {button}
        </Link>
      ) : (
        <Link to="/Clip">{button}</Link>
      )}
    </Container>
  );
}

export default Header;
