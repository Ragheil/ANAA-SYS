import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../styles/Dashboard.css'; // Dashboard-specific styles

const Dashboard = () => {
  // State to toggle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle open/close state
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Menu */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        {/* Clickable Sidebar Title to Toggle */}
        <h2 className="sidebar-title" onClick={toggleSidebar}>
          Menu
        </h2>
        
        {/* Only show menu links when the sidebar is open */}
        <ul className={`sidebar-links ${isSidebarOpen ? 'show' : 'hide'}`}>
          <li>
            <Link to="/today">Today</Link>
          </li>
          <li>
            <Link to="/faculty">Faculty</Link>
          </li>
          <li>
            <Link to="/queue">Queue</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation Bar */}
        <nav className="dashboard-nav">
          {/* Open/Close Sidebar Button */}
          <button className="menu-button" onClick={toggleSidebar}>
            {isSidebarOpen ? 'Close' : 'Open'} Menu
          </button>
          <h1 className="dashboard-title">Dashboard</h1>
          <ul className="nav-links">
            {/* Link back to the Login screen after Logout */}
            <li>
              <Link to="/login">Logout</Link>
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
    </div>
  );
};

export default Dashboard;
