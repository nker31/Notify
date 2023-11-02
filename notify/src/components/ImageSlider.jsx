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
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <div className="slides">
        {images.map((image, index) => (
          <div key={index} className={`slide ${selected === index + 1 ? 'active' : ''}`}>
            <img src={image} alt="" style={{ width: '100%' }} />
          </div>
        ))}
        {/* <div className="navigation-auto">
          {images.map((_, index) => (
            <div key={index} className={`auto-btn ${selected === index + 1 ? 'active' : ''}`}></div>
          ))}
        </div> */}
      </div>
      {/* <div className="navigation-manual">
        {images.map((_, index) => (
          <label key={index} className={`manual-btn ${selected === index + 1 ? 'active' : ''}`} onClick={() => setSelected(index + 1)}></label>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;