import React from 'react';
import './Testimonials.css'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import usersData from '../../../data.json';  // Import the users data

const Testimonials = () => {

    return (
        <>
            <div className="testimonials">
                <div className="section-left">
                    <div className="section-left-heading">Our Customers Speak</div>
                    <div className="section-left-p1">At Vivienne's, we're not just crafting exquisite jewelry; we're weaving stories, memories, and emotions into every piece. But don't just take our word for it.</div>
                    {/* <div className='section-left-p2'>Dive into the heartfelt experiences of our cherished clientele who've made Vivienne's a part of their most treasured moments. Their stories inspire us daily, pushing us to elevate our artistry and serve you better with each passing day.</div> */}
                </div>
                <div className="section-right">
                    <Swiper 
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {usersData.users.map(user => (
                            <SwiperSlide className='pagination-swiper'>
                                <img src={user.imgSrc} alt={user.name} />
                                <div className="pagination-detail">
                                    <div className="review">{user.review}</div>
                                    <div className="persona-name">{user.name}</div>
                                    <div className="country">{user.country},{user.state}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    )
}
export default Testimonials;
