import React from 'react';
import Landing from './Landing_Page/Landing';
import Icon from './Icon/Icon'
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonial';

const Home = () => {
    return (
        <>
            <Landing />
            <Icon />
            <Featured/>
            <Testimonials/>
        </>
    )
}

export default Home