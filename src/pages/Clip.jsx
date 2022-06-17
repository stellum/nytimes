import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import News from "../components/News";
import PageNaming from "../hoc/PageNaming";

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 799px) {
    align-content: center;
    flex-direction: column;
  }
`;
function Clip() {
  const clipped = useSelector((state) => state.addClip.clip);
  //console.log(clipped);
  return (
    <>
      <h2>cliplist</h2>
      <Container>
        {clipped.map((news) => {
          return (
            <News
              key={news._id}
              _id={news._id}
              headline={news.headline}
              abstract={news.abstract}
              pub_date={news.pub_date}
              web_url={news.web_url}
            />
          );
        })}
      </Container>
    </>
  );
}
export default PageNaming(Clip, "Clip");
