import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>Feedback Board</Link>
      </div>
      <div className='navbar-links'>
        <Link to='/feedback'>Submit Feedback</Link>
        <Link to='/list'>View Feedback</Link>
      </div>
    </nav>
  );
}

export default Navbar;