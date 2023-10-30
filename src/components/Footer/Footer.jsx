import React from 'react';
import './Footer.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const links1 = [
        { route: "/shop", label: "Shop" },
        { route: "/about", label: "About" },
        { route: "", label: "Policies" },
        { route: "/contact", label: "Contact" },
        { route: "/collections", label: "Collections" }
    ];

    const links2 = [
        { route: "", label: "Discover" },
        { route: "/account", label: "Account" },
        { route: "", label: "Community" },
        { route: "", label: "Information" },
        { route: "", label: "Customer Care" }
    ];

    return (
        <>
            <footer>
                <div className="footer-heading">Vivienne's</div>
                <div className="footer-text">

                    <div className="footer-text-1">
                        {links1.map(link => (
                            <NavLink key={link.route} to={link.route} className="footer-navlink">
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                    <div className="footer-text-2">
                        {links2.map(link => (
                            <NavLink key={link.route} to={link.route} className="footer-navlink">
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                </div>
                <div className="footer-newsletter">
                    <p className='newsletter-heading'>Subscribe to our newsletter</p>
                    <p className='newsletter-text'>For product announcements and exclusive insights</p>
                    <div className="newsletter-form">
                        <div className="input-container">
                            <EmailOutlinedIcon style={{ color: 'f5f5f5' }} className='input-icon' />
                            <input type="text" placeholder="Input your mail" />
                            <button className='footer-button'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
