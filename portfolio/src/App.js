
import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from './Components/Skills';
import VolunteerExperience from "./Components/VolunteerExperience";

function App() {
  return (
    <>
    <Navbar/>
     <div className="container">
       <Hero/>
       <Skills/>
       <VolunteerExperience/>
     </div>

    </>
  );
}

export default App;
