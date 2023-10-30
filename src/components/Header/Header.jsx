import React, { useState } from 'react';
import './Header.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isActive, setActive] = useState(false);

    const toggleActive = () => setActive(!isActive);

    const renderNavLink = (route, label) => (
        <li className="nav-item">
            <NavLink 
                to={route} 
                className="nav-link" 
                activeClassName="nav-link--active" 
                onClick={() => setActive(false)}   // Close the menu after clicking
            >
                {label}
            </NavLink>
        </li>
    );
    
    return (
        <header>
            <nav className="navbar">
                <NavLink to='/' className="nav-branding">Vivienne's</NavLink>
                <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
                    <div className="nav-content">
                        <div className="account">
                            <div className="account-item">
                                <NavLink to="/account" onClick={() => setActive(false)} >
                                    <PersonOutlineOutlinedIcon style={{ color: '#FFFF' }} className='person icon' />
                                </NavLink>
                                <NavLink to="/account" onClick={() => setActive(false)} className='a'>Account</NavLink>
                            </div>
                            <div className="account-item">
                                <NavLink to="/cart" onClick={() => setActive(false)} >
                                    <ShoppingCartOutlinedIcon style={{ color: '#FFFF' }} className='cart icon' />
                                </NavLink>
                                <NavLink to="/cart" onClick={() => setActive(false)} className='a'>Cart</NavLink>
                            </div>
                        </div>
                        {renderNavLink("/", "Home")}
                        {renderNavLink("/shop", "Shop")}
                        {renderNavLink("/collections", "Collections")}
                        {renderNavLink("/about", "About")}
                        {renderNavLink("/contact", "Contact")}
                    </div>
                </ul>
                <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActive}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
