import React from 'react';
import "../Styles/Skills.css";
import { SKILLS } from "../Utils/data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="skills-container">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
              {SKILLS.map((item) =>(
                <SkillsCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                
                />
              ))}
              </div>
               </div>  
            <div className="skills-info">
                
            </div>
        
    </section>
  )
}

export default Skills
