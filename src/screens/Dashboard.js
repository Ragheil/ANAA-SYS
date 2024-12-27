import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../styles/Dashboard.css'; // Dashboard-specific styles
import barGraphIcon from '../images/bar-graph.png';
import messageIcon from '../images/message.png';
import notificationIcon from '../images/notification.png';
import logoutIcon from '../images/logout.png';
import checkIcon from '../images/check.png';
import clockIcon from '../images/clock.png';
import offlineIcon from '../images/offline.png';
import todayIcon from '../images/today.png';
import facultyIcon from '../images/faculty.png';
import queueIcon from '../images/queue.png';

const Dashboard = () => {
  // State to toggle sidebar visibility (icons and text)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle open/close state
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Menu */}
      <aside
        className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
        onMouseEnter={() => setIsSidebarOpen(true)} // Open on hover
        onMouseLeave={() => setIsSidebarOpen(false)} // Close when mouse leaves
      >
        {/* Sidebar Links */}
        <ul className="sidebar-links">
          <li>
            <Link to="/today" className="sidebar-link">
              <img src={todayIcon} alt="Today" className="menu-icon" />
              <span className="menu-text">Today</span>
            </Link>
          </li>
          <li>
            <Link to="/faculty" className="sidebar-link">
              <img src={facultyIcon} alt="Faculty" className="menu-icon" />
              <span className="menu-text">Faculty</span>
            </Link>
          </li>
          <li>
            <Link to="/queue" className="sidebar-link">
              <img src={queueIcon} alt="Queue" className="menu-icon" />
              <span className="menu-text">Queue</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation Bar */}
        <nav className="dashboard-nav">
          {/* Open/Close Sidebar Button 
          <button className="menu-button" onClick={toggleSidebar}>
            {isSidebarOpen ? 'Close' : 'Open'} Menu
          </button>*/}
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="nav-icons">
            <img src={notificationIcon} alt="Notifications" className="nav-icon small-icon" />
            <Link to="/login">
              <img src={logoutIcon} alt="Logout" className="nav-icon small-icon" />
            </Link>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="widget-container">
            <div className="widget-container-three-columns">
              <div className="widget available">
                <h3>Available</h3>
                <img src={checkIcon} alt="Available" className="widget-icon small-icon" />
                <p>3 Faculty</p>
              </div>
              <div className="widget busy">
                <h3>Busy</h3>
                <img src={clockIcon} alt="Busy" className="widget-icon small-icon" />
                <p>2 Faculty</p>
              </div>
              <div className="widget offline">
                <h3>Offline</h3>
                <img src={offlineIcon} alt="Offline" className="widget-icon small-icon" />
                <p>1 Faculty</p>
              </div>
            </div>
          </div>

          {/* Chart and Notifications in One Row, Two Columns */}
          <div className="chart-notifications-container">
            <div className="chart-container">
              <h3>Bar Chart <img src={barGraphIcon} alt="Bar Graph" className="chart-icon small-icon" /></h3>
              <div className="bar-chart">Bar Chart Placeholder</div>
            </div>
            <div className="notifications-container">
              <h3>Notifications</h3>
              <div className="notifications-list">
                <div className="notifications-two-column">
                  <ul>
                    <li><img src={messageIcon} alt="Message" className="message-icon small-icon" /> New message - 16 mins ago</li>
                    <li><img src={messageIcon} alt="Message" className="message-icon small-icon" /> New message - 23 mins ago</li>
                    <li><img src={messageIcon} alt="Message" className="message-icon small-icon" /> New message - 37 mins ago</li>
                    <li><img src={messageIcon} alt="Message" className="message-icon small-icon" /> New message - 30 mins ago</li>
                  </ul>
                </div>
              </div>
              <button>Show All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
