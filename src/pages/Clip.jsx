import { useDispatch, useSelector } from "react-redux";
import ClipList from "../components/ClipList";

function Clip() {
  const clipped = useSelector((state) => state.addClip.clip);
  console.log(clipped);
  return (
    <>
      <h2>cliplist</h2>
      <ClipList clip={clipped} />
    </>
  );
}

export default Clip;
