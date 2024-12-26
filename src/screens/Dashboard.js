import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../styles/Dashboard.css'; // Dashboard-specific styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <h1 className="dashboard-title">Dashboard</h1>
        <ul className="nav-links">
          {/* Link back to the Login screen after Logout */}
          <li>
            <Link to="/login">Logout</Link> {/* Changed path to /login */}
          </li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard!</h2>
        <p>This is your main application screen.</p>
        <div className="dashboard-widgets">
          <div className="widget">
            <h3>Widget 1</h3>
            <p>Content goes here...</p>
          </div>
          <div className="widget">
            <h3>Widget 2</h3>
            <p>Content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
