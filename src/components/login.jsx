import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Header from './header';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password, role });
      if (response.data.role === 'Student') {
        window.location.href = '/login/studentdash';
      } else if (response.data.role === 'Faculty Member') {
        window.location.href = '/facultydash';
      } else {
        window.location.href = '/admin-dashboard';
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-card">
          <form onSubmit={handleLogin}>
            <h2 className="login-card h2">Login</h2>
            <input
              className="login-card input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="login-card input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              className="login-card input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Faculty Member">Faculty Member</option>
              <option value="Administrator">Administrator</option>
            </select>
            <button className="login-card button" type="submit">Login</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

