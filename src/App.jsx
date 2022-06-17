import React from "react";
import Home from "./pages/Home";
import Clip from "./pages/Clip";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
// 이거 확인하시고 지우시면 됩니다.
// Styled Component
// font-family:
// https://fonts.google.com/noto/specimen/Noto+Sans?query=noto+sans
// font-size: 14px 기본
// background-color: #fff
// reset
// https://www.npmjs.com/package/styled-reset

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clip" element={<Clip />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
