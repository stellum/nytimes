import React from "react";
import Home from "./pages/Home";
import Clip from "./pages/Clip";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";

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
