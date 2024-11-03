import React from 'react'
import "../Styles/ContactMe.css";
import ContactInfoCard from './ContactInfoCard';
import Email from "../Assets/images/mail.png";
import Github from "../Assets/images/github.png";
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconUrl={Email}
                text="kodithuwakkusakuni@gmail.com"
                />
                 <ContactInfoCard
                iconUrl={Github}
                text="https://github.com/SakuniNK"
                />
            </div>
            <div style={{flex: 1}}>
              <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
