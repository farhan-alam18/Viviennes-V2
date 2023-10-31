import React from 'react';
import './Collections.css';
import collectionsData from '../../../data.json';

const Collections = () => {
  return (
    <div className="collections">
      <p>Our Collections</p>
      <div className="grid-container">
        {collectionsData.collections.map((collection, index) => (
          <div key={index} className="grid-item">
            <div className="image-container">
              <img src={collection.imgSrc} alt={collection.name} />
              <div className="image-text">{collection.name}</div>
            </div>
          </div>
        ))}
      </div>
      <button>Shop Now</button>
    </div>
  );
}

export default Collections;
