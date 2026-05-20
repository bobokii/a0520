import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <h1>客服中心</h1>
        <span className="status-badge">即時回應中</span>
      </div>
      <div className="navbar-actions">
        <button className="action-btn">🔔</button>
        <button className="action-btn">❓</button>
      </div>
    </header>
  );
}

export default Navbar;
