import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Airlines from "./Components/Airlines";
import Airline from "./Components/Airline";
import Home from "./Components/Home";
import SignUpForm from "./Components/SignUpForm";

// where you put all your paths and links
function App({ services }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/airlines" element={<Airlines />} />
        <Route path="/airlines/:id" element={<Airline />} />
      </Routes>
    </>
  );
}

export default App;
