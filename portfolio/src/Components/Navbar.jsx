import React from "react";
import "../Styles/Navbar.css";
import logo from "../Assets/images/SK1.png";

const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img src={logo} alt="logo" className="logo" />
                    <ul>
                        <li>
                            <a href="home" className="menu-item">Home</a>  
                        </li>
                        <li>
                            <a href="skills" className="menu-item">Skills</a> 
                        </li>
                        <li>
                            <a href="volunteer" className="menu-item">Volunteer Experience</a> 
                        </li>
                        <li>
                            <a href="projects" className="menu-item">Projects</a> 
                        </li>
                        <li>
                            <a href="contact" className="menu-item">Contact Me</a> 
                        </li>
                        <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>

                    <button className="menu-btn" onClick={() => {}}>
                        <span className="material-symbols-outlined" style={{fontSize: "1.8rem"}}>
                            menu
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
