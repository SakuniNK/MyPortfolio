
import React from 'react'
import "../Styles/ScrollUp.css";

const ScrollUp = () => {
    window.addEventListener("scroll",function (){
        const scrollUp = document.querySelector(".scrollUp");
        
        if(this.scrollY >= 560) scrollUp.classList.remove("show-scroll");
        else scrollUp.classList.add("show-scroll");
    })
  return (
    <a href="#" className="scrollUp">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp
