import  React from 'react';
import "../Styles/Hero.css";
import html from "../Assets/images/html.png";
import css from "../Assets/images/css.png";
import  java  from "../Assets/images/java.png";
import spring from "../Assets/images/spring.png";
import react from "../Assets/images/react.png";
import python  from "../Assets/images/python.png";
import profile from "../Assets/images/Sprofile.jpeg";


const Hero = ()=> {
    return (
        <section className="hero-container">
        <div className="hero-content">
            <h2>Embracing daily lessons, shaping tomorrow's innovations.</h2>
            <p>I’m a passionate full-stack developer with a drive for continuous learning
                and growth. Every challenge is an opportunity to expand my skill set,
                from front-end design to back-end functionality.
                I thrive on building innovative, user-centered solutions
                that blend technical expertise with creativity.
                My goal is to contribute to a dynamic team where
                I can leverage my knowledge and dedication
                to deliver impactful software.
            </p>
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