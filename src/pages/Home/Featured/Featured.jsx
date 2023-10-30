import React from 'react';
import './Featured.css'
import MySwiperComponent from './Slider';
import Slidermob from './Slidermob';

const Featured = () => {
  return (
    <>
    <div className="featured">
        <div className="featured-static">
            <div className="heading">Featured <br />Products</div>
            <p>Discover our curated selection of standout pieces, handpicked for their exceptional quality and design.</p>
            <button>Shop Now</button>
        </div>
        <div className="featured-dynamic-desktop">
          <MySwiperComponent/> 
        </div>
        <div className="featured-dynamic-mobile">
          <Slidermob />
        </div>
    </div>
    </>
  )
}

export default Featured