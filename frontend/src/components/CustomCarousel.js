import React, { useState, useEffect, useCallback } from 'react';
import '../CustomCarousel.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CustomCarousel = ({ images, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNextClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          handlePrevClick();
          break;
        case 'ArrowRight':
          handleNextClick();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrevClick, handleNextClick, onClose]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleNextClick]);

  return (
    <div className="carousel-overlay" onClick={onClose}>
      <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
        <button className="btn prev" onClick={handlePrevClick}>Prev</button>
        <div className="carousel">
          {images.map((imgSrc, index) => (
            <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
              <LazyLoadImage src={imgSrc} alt={`Slide ${index + 1}`} className="album-image-carousel" effect='blur'/>
            </div>
          ))}
        </div>
        <button className="btn next" onClick={handleNextClick}>Next</button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
