import React, { useState } from 'react';
import Header from './header';
import './staffdash.css';

const FacultyDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header />
      <div className="faculty-dashboard">
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </button>
          <div className="menu-content">
            <img src="https://via.placeholder.com/100" alt="Profile" />
            <h2>Faculty Name</h2>
            <ul>
              <li>Profile</li>
              <li>Class List</li>
              <li>Update Profile</li>
            </ul>
          </div>
        </div>
        <div className={`content ${isMenuOpen ? 'shifted' : ''}`}>
          <div className="dashboard-card">
            <h3>Class List</h3>
            <p>List of students in the faculty member's courses.</p>
            {/* Add functionality to display the class list */}
          </div>
          <div className="dashboard-card">
            <h3>Manage Classes</h3>
            <p>Manage your classes here.</p>
            {/* Add functionality to manage classes */}
          </div>
          <div className="dashboard-card">
            <h3>Update Profile</h3>
            <p>Update your office hours, contact email, and phone number.</p>
            {/* Add functionality to update profile */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
