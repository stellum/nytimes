import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ClipList from '../components/ClipList';

function Clip(clip,) {
  const clipped = useSelector((state) => state.addClip.clip);
  console.log(clipped);
  return (
    <>
      <h2>cliplist</h2>
     <pre> { clip.clipped }</pre>
    </>
  );
}

export default Clip;
