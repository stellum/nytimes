import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: #8f2b2b;
`; //임의로 styled Compontent 어떻게 할지 상의

const Logo = styled.img`
  width: 15%;
  display: block;
  margin: 30px auto;
`;

function Header() {
  let location = useLocation(); //현재 페이지 위치(url)가져오기
  const button = (
    <button>{location.pathname === "/Clip" ? "Home" : "Clip"}</button>
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
      {/* rel 열기 취약점 보안 */}
    </Container>
  );
}

export default Header;
