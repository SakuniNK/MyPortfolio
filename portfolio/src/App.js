import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
function App() {
  return (
    <>
    <Navbar/>
     <div className="container">
       <Hero/>
     </div>

    </>
  );
}

export default App;
