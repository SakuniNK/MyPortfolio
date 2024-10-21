
import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from './Components/Skills';

function App() {
  return (
    <>
    <Navbar/>
     <div className="container">
       <Hero/>
       <Skills/>
     </div>

    </>
  );
}

export default App;
