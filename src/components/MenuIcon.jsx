import React, { useState } from 'react';
import './MenuIcon.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <button className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="menu-content">
        <img src="https://via.placeholder.com/100" alt="Profile" />
        <h3>Student Name</h3>
        <ul>
          <li>Profile</li>
          <li>Courses</li>
          <li>Grades</li>
          <li>Attendance</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;