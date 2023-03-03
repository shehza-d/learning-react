import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";



export default function AuthFlow() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      </>
  );
}
