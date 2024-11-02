import React from 'react'
import "../Styles/ExperienceCard.css";

const ExperienceCard = ({details}) => {
  return (
    <div className="volunteer-experience-card">
        <h6>{details.title}</h6>

        <div className="volunteer-duration">{details.date}</div>

        <ul>
            {details.responsibilities.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceCard
