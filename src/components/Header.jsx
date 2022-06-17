import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
color: #8f2b2b;
`; //임의로 styled Compontent 어떻게 할지 상의

function Header() {
 let location  = useLocation(); //현재 페이지 위치(url)가져오기
 const button = (<button>
  {location.pathname === "/Clip"? "Home" : "Clip" }
</button>);

  return (
    <Container>
      <h2>New York Times</h2>
      { location.pathname === "/Clip" ? 
      <Link to="/" rel="noopener noreferrer">{button}</Link> 
      : <Link to="/Clip">{button}</Link> }
    {/* rel 열기 취약점 보안 */}
    </Container>
  )
}

export default Header
