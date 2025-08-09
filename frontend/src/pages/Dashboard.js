import React, { useState } from 'react';
import './Dashboard.css';
import { FaUserCircle, FaBookmark, FaClock, FaChartLine, FaStar } from 'react-icons/fa';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="dashboard-container">
      {/* Top Profile Card */}
      <div className="profile-card">
        <FaUserCircle className="profile-icon" />
        <div className="profile-details">
          <h2>admin</h2>
          <p>Job Seeker</p>
          <p>📍 Mumbai</p>
          <p>✉️ admin@signprint.in</p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div>
            <div className="stat-value">0</div>
            <div className="stat-label">Saved Jobs</div>
          </div>
          <FaBookmark className="stat-icon" />
        </div>
        <div className="stat-card">
          <div>
            <div className="stat-value">0</div>
            <div className="stat-label">Applied Jobs</div>
          </div>
          <FaClock className="stat-icon" />
        </div>
        <div className="stat-card">
          <div>
            <div className="stat-value">24</div>
            <div className="stat-label">Profile Views</div>
          </div>
          <FaChartLine className="stat-icon" />
        </div>
        <div className="stat-card">
          <div>
            <div className="stat-value">4.8</div>
            <div className="stat-label">Profile Rating</div>
          </div>
          <FaStar className="stat-icon" />
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {['Overview', 'Applied Jobs', 'Saved Jobs', 'Profile'].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'Overview' && (
          <div className="overview-content">
            <h3>Dashboard Overview</h3>
            <div className="overview-section">
              <div>
                <h4>Recent Applications</h4>
                <p>No applications yet</p>
              </div>
              <div>
                <h4>Saved Jobs</h4>
                <p>No saved jobs yet</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'Applied Jobs' && <p>No applied jobs found.</p>}
        {activeTab === 'Saved Jobs' && <p>No saved jobs found.</p>}
        {activeTab === 'Profile' && <p>Profile section coming soon.</p>}
      </div>
    </div>
  );
};

export default Dashboard;
