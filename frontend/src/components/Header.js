import React, { useState, useEffect } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import '../Header.css';
import logo from '../images/menu/botbot-logo.webp';
import facebook from '../images/menu/fb.svg';
import instagram from '../images/menu/instagram.svg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.scrollTop || document.documentElement.scrollTop;
      const scrolledDown = currentScrollPos > prevScrollPosition;

      setIsHidden(scrolledDown && currentScrollPos > 50);
      setPrevScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <div className={`header ${isHidden ? 'hidden' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <LazyLoadImage src={logo} alt="Bot Photography Portfolio Logo" effect='blur'/>
          </a>
        </div>
        <nav className={`left-nav ${showMenu ? 'show-menu' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setShowMenu(false)}>Home</a></li>
            <li><a href="#portfolio" onClick={() => setShowMenu(false)}>Gallery</a></li>
            <li><a href="#about" onClick={() => setShowMenu(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setShowMenu(false)}>Contact</a></li>
          </ul>
        </nav>
        <nav className="right-nav">
          <ul>
            <li>
              <a href="https://www.facebook.com/botbotbaby?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <LazyLoadImage src={facebook} alt="Facebook Logo" effect='blur'/>
                <span class="sr-only">Follow us on Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/botbot_photography/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr&fbclid=IwZXh0bgNhZW0CMTAAAR1EIJ8LBlHmm2MDsa1RRueprHrJOiksScykuaV7Hyf6Vs7q8k4qpCar62w_aem_uNqmf4wd22V47X-eHbWmTw" target='_blank' rel="noopener noreferrer">
                <LazyLoadImage src={instagram} alt="Instagram Logo" effect='blur'/>
                <span class="sr-only">Follow us on Instagram</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-toggle" onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
