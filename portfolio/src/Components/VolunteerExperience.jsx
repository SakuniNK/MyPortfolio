import React, { useRef } from 'react'
import "../Styles/VolunteerExperience.css";
import ExperienceCard from './ExperienceCard';
import { VOLUNTEER_EXPERIENCE } from '../Utils/data';
import Slider from "react-slick";



const VolunteerExperience = ({ details }) => {
  const sliderRef = useRef();
  const settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsitve: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="experience-container">
      <h5>Volunteer Experience</h5>

      <div className="experience-content">

        <div className="arrow-right">
          <span class="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left">
        <span class="material-symbols-outlined">chevron_left</span>
        </div>
          <Slider ref={sliderRef} {...settings}>
            {VOLUNTEER_EXPERIENCE.map((item) => (
              <ExperienceCard key= {item.title} details={item} />
            ))}
          </Slider>
      </div>
    </section>
  )
}

export default VolunteerExperience
