import React from 'react';
import Landing from './Landing_Page/Landing';
import Icon from './Icon/Icon'
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonial';
import Collections from './Our_Collections/Collections';

const Home = () => {
    return (
        <>
            <Landing />
            <Icon />
            <Featured/>
            <Collections />
            <Testimonials/>
        </>
    )
}

export default Home