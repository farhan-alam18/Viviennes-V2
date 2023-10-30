import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Slidermob.css';
import { NavLink } from 'react-router-dom';
import productsData from '../../../data.json';  // Import the data

function Slidermob() {

    return (
        <Swiper
            spaceBetween={180}
            slidesPerView={2}
            scrollbar={{ hide: true, el: '.swiper-scrollbar' }}
            style={{height: '400px' }}
        >
            {productsData.products.map(product => (
                <SwiperSlide key={product.id} className='my_swiper_slider'>
                    <p className='price_mob'>{product.price}</p>
                    <p className='name_mob'>{product.name}</p>
                    <NavLink to="/products">
                        <img src={product.imgSrc} alt={product.name} />
                    </NavLink>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slidermob;
