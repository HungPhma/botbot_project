import React, { useState, useRef } from 'react';
import CustomCarousel from './CustomCarousel.js';
import '../App.css';
import babyImage from '../images/Newborn_2/17.webp';
import babyImage1 from '../images/Newborn_2/1.webp';
import babyImage2 from '../images/Newborn_2/2.webp';
import babyImage3 from '../images/Newborn_2/3.webp';
import babyImage4 from '../images/Newborn_2/4.webp';
import babyImage5 from '../images/Newborn_2/5.webp';
import babyImage6 from '../images/Newborn_2/6.webp';
import babyImage7 from '../images/Newborn_2/7.webp';
import babyImage8 from '../images/Newborn_2/8.webp';
import babyImage9 from '../images/Newborn_2/9.webp';
import babyImage10 from '../images/Newborn_2/10.webp';
import babyImage11 from '../images/Newborn_2/11.webp';
import babyImage12 from '../images/Newborn_2/12.webp';
import babyImage13 from '../images/Newborn_2/13.webp';
import babyImage14 from '../images/Newborn_2/14.webp';
import babyImage15 from '../images/Newborn_2/15.webp';
import babyImage16 from '../images/Newborn_2/16.webp';

import familyImage from '../images/Family_2/family-gallery.webp';
import familyImage1 from '../images/Family_2/1.webp';
import familyImage2 from '../images/Family_2/2.webp';
import familyImage3 from '../images/Family_2/3.webp';
import familyImage4 from '../images/Family_2/4.webp';
import familyImage5 from '../images/Family_2/5.webp';
import familyImage6 from '../images/Family_2/6.webp';
import familyImage7 from '../images/Family_2/7.webp';
import familyImage8 from '../images/Family_2/8.webp';
import familyImage9 from '../images/Family_2/9.webp';
import familyImage10 from '../images/Family_2/10.webp';
import familyImage11 from '../images/Family_2/11.webp';

import foodImage from '../images/Food-Product_2/food-gallery-3.webp';
import foodImage1 from '../images/Food-Product_2/1.webp';
import foodImage4 from '../images/Food-Product_2/2.webp';
import foodImage3 from '../images/Food-Product_2/3.webp';
import foodImage2 from '../images/Food-Product_2/4.webp';
import foodImage5 from '../images/Food-Product_2/5.webp';
import foodImage7 from '../images/Food-Product_2/6.webp';
import foodImage9 from '../images/Food-Product_2/7.webp';
import foodImage11 from '../images/Food-Product_2/8.webp';
import foodImage6 from '../images/Food-Product_2/9.webp';
import foodImage8 from '../images/Food-Product_2/10.webp';
import foodImage10 from '../images/Food-Product_2/11.webp';

import maternityImage from '../images/Maternity_2/5.webp';
import maternityImage1 from '../images/Maternity_2/1.webp';
import maternityImage6 from '../images/Maternity_2/2.webp';
import maternityImage2 from '../images/Maternity_2/3.webp';
import maternityImage13 from '../images/Maternity_2/4.webp';

import maternityImage12 from '../images/Maternity_2/6.webp';
import maternityImage7 from '../images/Maternity_2/7.webp';
import maternityImage8 from '../images/Maternity_2/8.webp';
import maternityImage9 from '../images/Maternity_2/9.webp';
import maternityImage10 from '../images/Maternity_2/10.webp';
import maternityImage11 from '../images/Maternity_2/11.webp';
import maternityImage3 from '../images/Maternity_2/12.webp';
import maternityImage4 from '../images/Maternity_2/13.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const images = {
  Newborn: [
    babyImage1, babyImage2, babyImage3, babyImage4, babyImage5,
    babyImage6, babyImage7, babyImage8, babyImage9, babyImage10,
    babyImage11, babyImage12, babyImage13, babyImage14, babyImage15,
    babyImage16
  ],
  Family: [
    familyImage1, familyImage2, familyImage3, familyImage4, familyImage5,
    familyImage6, familyImage7, familyImage8, familyImage9, familyImage10,
    familyImage11
  ],
  Products: [
    foodImage1, foodImage2, foodImage3, foodImage4, foodImage5,
    foodImage6, foodImage7, foodImage8, foodImage9, foodImage10,
    foodImage11
  ],
  Maternity: [
    maternityImage10, maternityImage12, maternityImage13, maternityImage9,
    maternityImage11, maternityImage1, maternityImage2, maternityImage3,
    maternityImage4, maternityImage6, maternityImage7, maternityImage8
  ]
};

const Portfolio = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(images.Newborn);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const [selectedAlbumName, setSelectedAlbumName] = useState('Newborn');
  const albumRef = useRef(null);

  const handleExploreClick = (albumName, index = 0) => {
    setSelectedAlbum(images[albumName]);
    setSelectedAlbumName(albumName);
    setInitialIndex(index);
    setCarouselOpen(false);  // Close any existing carousel
    setTimeout(() => {
      if (albumRef.current) {
        albumRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  const handleImageClick = (index) => {
    setInitialIndex(index);
    setCarouselOpen(true);  // Open the carousel after setting the initial index
  };

  const handleCloseCarousel = () => {
    setCarouselOpen(false);
  };

  return (
    <section id="portfolio" className="container-gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-card">
          <LazyLoadImage src={babyImage} alt="Baby" effect='blur'/>
          <div className="overlay">
            <div className="title">Newborn</div>
            <div className="description">
              "Capturing the pure wonder of a newborn is a gift; every moment is a treasure."
            </div>
            <button className="explore-button" onClick={() => handleExploreClick('Newborn')}>Explore</button>
          </div>
        </div>
        <div className="gallery-card">
          <LazyLoadImage src={familyImage} alt="Family" effect='blur'/>
          <div className="overlay">
            <div className="title">Family</div>
            <div className="description">
              "Family is where life begins and love never ends."
            </div>
            <button className="explore-button" onClick={() => handleExploreClick('Family')}>Explore</button>
          </div>
        </div>
        <div className="gallery-card">
          <LazyLoadImage src={maternityImage} alt="Maternity" effect='blur'/>
          <div className="overlay">
            <div className="title">Maternity</div>
            <div className="description">
              "A beautiful journey of life before it begins; the anticipation and joy of new beginnings."
            </div>
            <button className="explore-button" onClick={() => handleExploreClick('Maternity')}>Explore</button>
          </div>
        </div>
        <div className="gallery-card">
          <LazyLoadImage src={foodImage} alt="Food" effect='blur'/>
          <div className="overlay">
            <div className="title">Foods/Products</div>
            <div className="description">
              "Food is the ingredient that binds us together."
            </div>
            <button className="explore-button" onClick={() => handleExploreClick('Products')}>Explore</button>
          </div>
        </div>
      </div>
      {selectedAlbum && (
        <>
          <div className="arrow">&#9660;</div>
          <div ref={albumRef} className="album-container-expanded">
          <h1 className="album-title">
            {selectedAlbumName === 'Products' ? 'Foods & Products' : selectedAlbumName.charAt(0).toUpperCase() + selectedAlbumName.slice(1)}
          </h1>
            <div className="album-grid">
              {selectedAlbum.map((imgSrc, index) => (
                <div 
                  key={index} 
                  className="album-grid-item" 
                  onClick={() => handleImageClick(index)}
                >
                  <LazyLoadImage src={imgSrc} alt={`Slide ${index + 1}`} className="album-image" effect='blur'/>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {carouselOpen && (
        <div className="modal-overlay" onClick={handleCloseCarousel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseCarousel}>×</button>
            <CustomCarousel 
              images={selectedAlbum} 
              initialIndex={initialIndex} 
              onClose={handleCloseCarousel} 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;