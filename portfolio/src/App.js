
import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from './Components/Skills';
import VolunteerExperience from "./Components/VolunteerExperience";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import ScrollUp from "./Components/ScrollUp";

function App() {
  return (
    <>
    <Navbar/>
     <div className="container">
       <Hero/>
       <Skills/>
       <VolunteerExperience/>
       <ContactMe/>
     </div>
     <Footer/>
     <ScrollUp/>
    </>
  );
}

export default App;
