import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Slider.css';
import { NavLink } from 'react-router-dom';
import productsData from '../../../data.json';  // Import the data

function MySwiperComponent() {

    return (
        <Swiper
            spaceBetween={25}
            slidesPerView={5}
            scrollbar={{ hide: false, el: '.swiper-scrollbar' }}
            style={{ width: '1490px', height: '380px' }}
            className='swiper'
        >
            {productsData.products.map(product => (
                <SwiperSlide key={product.id} className='my-swiper-slider'>
                    <div className='price'>{product.price}</div>
                    <div className='name'>{product.name}</div>
                    <NavLink to="/shop">
                        <img src={product.imgSrc} alt={product.name} />
                    </NavLink>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MySwiperComponent;
