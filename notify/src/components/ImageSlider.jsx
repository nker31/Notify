import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import pic1 from '../images/donate1.jpg';
import pic2 from '../images/donate2.jpg';
import pic3 from '../images/donate3.jpg';

const ImageSlider = () => {
  const [selected, setSelected] = useState(1);

  const imageDetails = [
    {
      image: pic1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis, officia ullam distinctio voluptatem illo vel accusantium voluptatibus placeat, temporibus recusandae dignissimos.",
    },
    {
      image: pic2,
      description: "Facilis reprehenderit corporis libero nihil, voluptate ab magni dolore facere tempora dignissimos neque? Beatae nobis a excepturi laborum? Ipsam ad omnis asperiores?",
    },
    {
      image: pic3,
      description: "Iste perspiciatis porro totam, ex unde voluptates quam suscipit aut earum itaque eveniet qui laudantium facere sapiente nemo, distinctio odio voluptatibus cum!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected % imageDetails.length) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [imageDetails.length]);

  return (
    <div className='slide-container'>
      <div className="slider">
        <div className="slides">
          {imageDetails.map((item, index) => (
            <div key={index} className={`slide ${selected === index + 1 ? 'active' : ''}`}>
              <img className='slider-image' src={item.image} alt="" style={{ width: '100%' }} />
            </div>
          ))}
        </div>
        
      </div>

      <div className='description'>
        <p className='description-paragraph'>
          {selected > 0 && selected <= imageDetails.length ? imageDetails[selected - 1].description : ""}
        </p>
      </div>

      <div className="navigation-container">
        <div className="navigation-manual">
          {imageDetails.map((_, index) => (
            <label key={index} className={`manual-btn ${selected === index + 1 ? 'active' : ''}`} onClick={() => setSelected(index + 1)}></label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;