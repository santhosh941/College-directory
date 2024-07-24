 import React, { useState } from 'react';
import Header from './header';
import './studentdash.css';

const StudentDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 

  return (
    <div>
    <Header/>
    <div className="studentdashboard">
      <div className={`hamburgermenu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menuicon" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className="menucontent">
          <img src="https://via.placeholder.com/100" alt="Profile" />
          <h2>Student Name</h2>
          <ul>
            <li>Courses</li>
            <li>Grades</li>
            <li>Attendance</li>
          </ul>
        </div>
      </div>
      <div className={`content ${isMenuOpen ? 'shifted' : ''}`}>
        <div className="dashboardcard">
          <h3>Courses</h3>
          <p>Course content goes here...</p>
        </div>
        <div className="dashboardcard">
          <h3>Grades</h3>
          <p>Grades content goes here...</p>
        </div>
        <div className="dashboardcard">
          <h3>Attendance</h3>
          <p>Attendance content goes here...</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentDashboard;