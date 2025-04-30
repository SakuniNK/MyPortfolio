
import "../Styles/Navbar.css";
import logo from "../Assets/images/SN.png";
import Hero from "./Hero.jsx";  
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Volunteer from "./VolunteerExperience.jsx";
import Contact from "./ContactMe.jsx";
import React, { useState, useEffect } from "react";

const Navbar = () => {

    const [Toggle, showMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
  
    useEffect(() => {
      const sections = document.querySelectorAll("section[id]");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.6 } // Adjust this value to control when the link gets activated (e.g., when 60% of the section is visible)
      );
  
      sections.forEach((section) => observer.observe(section));
  
      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, []);

    return (

       
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img src={logo} alt="logo" className="logo" />
                    <ul>
                        <li>
                            <a href={Hero} className="menu-item">Home</a>  
                        </li>
                        <li>
                            <a href={Skills} className="menu-item">Skills</a> 
                        </li>
                        <li>
                            <a href={Projects} className="menu-item">Projects</a> 
                        </li>
                        <li>
                            <a href={Volunteer} className="menu-item">Volunteer Experience</a> 
                        </li>
                        <li>
                            <a href={Contact} className="menu-item">Contact Me</a> 
                        </li>
                        <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>

                    {/* <button className="menu-btn" onClick={() => {}}>
                        <span className="material-symbols-outlined" style={{fontSize: "1.8rem"}}>
                            menu
                        </span>
                    </button> */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
