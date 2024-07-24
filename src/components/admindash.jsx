import React, { useState } from 'react';
import Header from './header';
import './admindash.css';

const AdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('manageRecords');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header />
      <div className="admin-dashboard">
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </button>
          <div className="menu-content">
            <img src="https://via.placeholder.com/100" alt="Profile" />
            <h2>Admin Name</h2>
            <ul>
              <li onClick={() => setActiveTab('manageRecords')}>Manage Records</li>
              <li onClick={() => setActiveTab('dashboard')}>Dashboard</li>
            </ul>
          </div>
        </div>
        <div className={`content ${isMenuOpen ? 'shifted' : ''}`}>
          {activeTab === 'manageRecords' && (
            <div className="dashboard-section">
              <h2>Manage Student and Faculty Records</h2>
              <div className="manage-records">
                <div className="form-section">
                  <button className='btnadd'>Add</button>
                  <button className='btnremove'>Remove</button>
                  <button className='btnupdate'>Update</button>         
               <form>
                <label>Record Type:</label>
                    <select>
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                    </select><br></br>
                    <label>Name:</label>
                    <input className='namefield' type="text" placeholder="Name" /> <br></br>
                    <label>Email:</label>
                    <input className='emailfield' type="email" placeholder="Email" /><br></br>
                    <label>Phone:</label>
                    <input className='phonefield'type="text" placeholder="Phone" /><br>
                    </br>
                    <button className='buttonsubmit'type="submit">Submit</button>
                  </form>
                </div>
                <div className="records-list">
                  <h3>Record List</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Sample data, replace with dynamic data */}
                      <tr>
                        <td>John Doe</td>
                        <td>johndoe@example.com</td>
                        <td>(123) 456-7890</td>
                        <td>
                          <button className='tablebtn1'>Edit</button>
                          <button className='tablebtn2'>Delete</button>
                        </td>
                      </tr>
                      {/* Repeat for more records */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'dashboard' && (
            <div className="dashboard-section">
              <h2>Dashboard with Graphs</h2>
              <div className="charts">
                <div className="chart">
                  <h3>Student Enrollment Trends</h3>
                  {/* Placeholder for a chart component */}
                  <div className="chart-placeholder">Chart goes here</div>
                </div>
                <div className="chart">
                  <h3>Faculty Course Loads</h3>
                  {/* Placeholder for a chart component */}
                  <div className="chart-placeholder">Chart goes here</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
