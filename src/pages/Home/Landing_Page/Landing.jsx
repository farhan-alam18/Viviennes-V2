import React from 'react';
import './Landing.css'
import image169 from '../../../assets/Image-169.png'
import image170 from '../../../assets/Image-170.png'
const Landing = () => {
    return (
        <>
            <div className="landing">
                <p className="heading">Glow & Glamour :  <br />Regal Radiance <br />Revealed <br /><button>Shop Now</button></p>
                <div className="landing-image">
                    <img className="img1" src={image169} alt="" />
                    <img className='img2' src={image170} alt='' />
                </div>
            </div>
            <div className="button">
                <button className='landing-button'>Shop Now</button>
            </div>
        </>
    )
}

export default Landing