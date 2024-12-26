import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to navigate between screens
import '../styles/Login.css'; // Import the CSS file
import logo from '../images/Anaa-sys-logo.png';

const Login = () => {
  // State to manage form input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (you can customize this logic)
    if (email && password) {
      alert('Login successful!');
      // Here you would typically send the data to your backend or authentication service
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="login-container">
      {/* Left side for image and titles */}
      <div className="login-image">
        <h1 className="title">ANAA SYS</h1>
        <h3 className="subtitle">Availability Notification and Alerting System</h3>
        <hr className="divider" />
        <img src={logo} alt="Login" className="logo" />
      </div>

      {/* Right side for login form */}
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        {/* Link to the Sign Up page */}
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
