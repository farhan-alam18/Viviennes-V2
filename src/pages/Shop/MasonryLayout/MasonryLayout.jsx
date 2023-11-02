import React from 'react';
import shop from '../../../data.json';
import './MasonryLayout.css';
import { NavLink } from 'react-router-dom';
import CallMadeIcon from '@mui/icons-material/CallMade';

const MasonryLayout = () => {
  return (
    <>
      <div className="masonry">
        <div className="masonry_cont">
          {shop.product_list.map(source => (
            <div key={source.id} className="masonry-item">
              <img id={source.id} src={source.imgSrc} alt='' className='masonry-image' />
              <div className="masonry-info">
                <NavLink to="/prod-details">
                  <CallMadeIcon style={{ color: "black" }} />
                </NavLink>
                <div className="masonry_text">
                  <p className="masonry_name">{source.name}</p>
                  <p className="masonry-price">{source.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MasonryLayout;
