import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className='container'>
      <img src={logo} alt="logo" className='logo' />
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={menuActive ? 'active' : ''}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/blog" onClick={toggleMenu}>Blog-News</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
