import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about/About";



export default function MainFlow() {


  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      </>
  );
}
