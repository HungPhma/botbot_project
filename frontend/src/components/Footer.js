import React from 'react';
import '../App.css';
import facebook from '../images/menu/fb-footer.svg';
import instagram from '../images/menu/instagram-footer.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage src={facebook} alt="Facebook" className="social-logo" effect='blur'/>
            <span class="sr-only">Follow us on Facebook</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage src={instagram} alt="Instagram" className="social-logo" effect='blur'/>
            <span class="sr-only">Follow us on Instagram</span>
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 · #botbotphotography</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
