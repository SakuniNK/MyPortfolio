
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
        <header className="header">
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img src={logo} alt="logo" className="logo" />
                    
                    <div className="nav-menu">
                        <ul className="nav-list grid">
                            <li className="nav-item">
                                <a href="#home" className="nav-link active-link">
                                    <i className="uil uil-estate nav__icon"></i> Home</a>  
                            </li>

                            <li className="nav-item">
                                <a href="#skills" className="nav-link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills</a> 
                            </li>

                            <li className="nav-item">
                                <a href="#projects" className="nav-link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>Projects</a> 
                            </li>

                            <li className="nav-item">
                                <a href="#education" className="nav-link">
                                <i className="uil uil-graduation-cap nav__icon"></i>Education</a> 
                            </li>

                            <li className="nav-item">
                                <a href="#experience" className="nav-link">
                                <i className="uil uil-users-alt nav__icon"></i>Volunteer Experience</a> 
                            </li>

                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                <i className="uil uil-message nav__icon"></i>Contact Me</a> 
                            </li>

                            <button className="contact-btn" onClick={() => {}}>
                                Hire Me
                            </button>
                        </ul>
                        <i className="uil uil-times nav__close"></i>
                    </div>

                    <div className="nav__toggle">
                        {/* Replacing the app icon with a different one */}
                        <i className="uil uil-bars nav__toggle"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
