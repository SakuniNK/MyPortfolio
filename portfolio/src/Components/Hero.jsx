import  React from 'react';
import "../Styles/Hero.css";
import html from "../Assets/images/html.png";
import css from "../Assets/images/css.png";
import  java  from "../Assets/images/java.png";
import spring from "../Assets/images/spring.png";
import react from "../Assets/images/react.png";
import python  from "../Assets/images/python.png";
import profile from "../Assets/images/Sprofile.jpeg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Hero = ()=> {
    return (
        <section className="hero-container">
        <div className="hero-content">
            <h2>Sakuni Nikeshala</h2>
            <h3>Full Stack Developer</h3>
            <p>I'm a Final year Computer Science and Technology undergraduate at Uva Wellassa University of Sri Lanka, passionate about turning ideas into impactful digital solutions.
With hands-on experience in full-stack development, machine learning, and natural language processing, I love building applications that solve real world problems.
</p>       
<p>
Let's connect and create something amazing!</p>

            <div className="hero-btns">
                <a href="https://github.com/SakuniNK" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/sakunikodithuwakku/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon"/>
                </a>
                <button className="download-btn" onClick={() => {}}>
                    <a href="https://drive.google.com/file/d/1Z3W-oF2BK2vRJmgX82BcxxDqp-3_rQf6/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>Download CV</a>
                </button>
            </div>
        </div>
        <div className="hero-img">
            <div className="profile-img">
                <img src={profile} alt="Profile" />
            </div>
            <div className="tech-icons-row">
                <div className="tech-icon">
                    <img src={html} alt="HTML"/>
                </div>
                <div className="tech-icon">
                    <img src={css} alt="CSS"/>
                </div>
                <div className="tech-icon">
                    <img src={react} alt="React"/>
                </div>
                <div className="tech-icon">
                    <img src={python} alt="Python"/>
                </div>
                <div className="tech-icon">
                    <img src={java} alt="Java"/>
                </div>
                <div className="tech-icon">
                    <img src={spring} alt="Spring"/>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default Hero;