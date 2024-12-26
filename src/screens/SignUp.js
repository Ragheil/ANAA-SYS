import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css'; // Reuse the same styles
import logo from '../images/Anaa-sys-logo.png'; // Reuse logo

const SignUp = () => {
  // State to manage form input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (you can customize this logic)
    if (email && password && password === confirmPassword) {
      alert('Sign up successful!');
      // Here you would typically send the data to your backend or authentication service
    } else {
      alert('Please ensure passwords match and all fields are filled.');
    }
  };

  return (
    <div className="login-container">
      {/* Left side for image and titles */}
      <div className="login-image">
        <h1 className="title">ANAA SYS</h1>
        <h3 className="subtitle">Availability Notification and Alerting System</h3>
        <hr className="divider" />
        <img src={logo} alt="Sign Up" className="logo" />
      </div>

      {/* Right side for sign up form */}
      <div className="login-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="password">Password:</label>
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
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
        {/* Link to the Login page */}
        <p className="signup-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
