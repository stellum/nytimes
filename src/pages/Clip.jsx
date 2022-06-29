import React from "react";
import { useSelector } from "react-redux";
import ClipList from "../components/ClipList";
import PageNaming from "../hoc/PageNaming";

function Clip() {
  const clipped = useSelector((state) => state.addClip.clip);
  return (
    <>
      <h2>cliplist</h2>
      <ClipList clip={clipped} />
    </>
  );
}

export default PageNaming(Clip, "Clip");
