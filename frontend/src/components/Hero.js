import React, { useEffect } from 'react';
import '../Hero.scss'; // Ensure correct path
import cover1 from '../images/Cover/cover1.webp';
import cover2 from '../images/Cover/cover2.webp';
import cover3 from '../images/Cover/cover3.webp';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Preload images
const preloadImages = [cover1, cover2, cover3];
preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

const Hero = () => {
  useEffect(() => {
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="image-container">
        <div className='box'>
          <LazyLoadImage src={cover1} alt="A captivating cover image featuring a beautiful landscape" className="center-image" effect='blur'/>
        </div>
        <div className='box'>
          <LazyLoadImage src={cover2} alt="A striking cover image showcasing an elegant cityscape" className="center-image" effect='blur'/>
        </div>
        <div className='box'>
          <LazyLoadImage src={cover3} alt="A stunning cover image highlighting a serene nature scene" className="center-image" effect='blur'/>
        </div>
      </div>
      <div className="hero-content">
        <div id="title">
          <span>Welcome to #botbot Photography!</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
