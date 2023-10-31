import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="header-title">Our Products</div>
        <div className="header-search">
            <SearchOutlinedIcon className='header-search-icon'/> 
            <input className="header-input" type="text" placeholder='Find jewelry you like......' />
        </div>
    </div>
    </>
  )
}

export default Header