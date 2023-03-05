import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Exercise from "./Components/Exercise";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
      <About></About>
      <Exercise></Exercise>
      <Contact></Contact>
    </div>
  )
}

export default App