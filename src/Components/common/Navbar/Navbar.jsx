import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className='navbar'>
      <a href='/' className='navbar-item'>
        Home
      </a>
      <a href='/about' className='navbar-item'>
        About
      </a>
      <a href='/portfolio' className='navbar-item'>
        Portfolio
      </a>
      <a href='/contact' className='navbar-item'>
        Contact
      </a>
    </section>
  );
};

export default Navbar;
