import React from 'react';
import '../App.css';
import me from '../images/profile/me.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Since 2014, I have immersed myself in the world of graphic design for a multimedia entertainment company, where I worked on major events, concerts, and advertising campaigns for top brands in Vietnam. Along the way, I discovered my true passion for photography as a method to express my artistic vision and appreciation for beauty and aesthetics.
            
            In 2019, I took a leap of faith and started my photography business, focusing on capturing precious moments with newborns, maternity shoots, and family portraits. 
          </p>
          <p>
            Over time, I expanded my expertise to include food and product photography, collaborating with renowned brands in Vietnam.
          
            Now, in 2024, I have relocated to the United States to further explore the limitless possibilities in photography and seek out new opportunities for collaboration.
          </p>
          <button onClick={handleContactClick} className="contact-button">Contact Me</button>
        </div>
        <div className="about-image">
          <LazyLoadImage src={me} alt="About myself" effect='blur' />
        </div>
      </div>
    </section>
  );
};

export default About;
