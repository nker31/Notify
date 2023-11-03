import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import pic1 from '../images/donate1.jpg';
import pic2 from '../images/donate2.jpg';
import pic3 from '../images/donate3.jpg';

const ImageSlider = () => {
  const [selected, setSelected] = useState(1);

  const images = [
    pic1,
    pic2,
    pic3
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected % images.length) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='slide-container'>
      <div className="slider">
        <div className="slides">
          {images.map((image, index) => (
            <div key={index} className={`slide ${selected === index + 1 ? 'active' : ''}`}>
              <img src={image} alt="" style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </div>

      <div className='description'>
        <p className='description-paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores pariatur inventore consequatur ex provident et dolores, fugit illo at a architecto quaerat, molestiae molestias
        </p>
      </div>

      <div className="navigation-container">
        <div className="navigation-manual">
          {images.map((_, index) => (
            <label key={index} className={`manual-btn ${selected === index + 1 ? 'active' : ''}`} onClick={() => setSelected(index + 1)}></label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;