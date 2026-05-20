import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">🌴</span>
        <h2>TravelBot</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active"><span className="icon">💬</span> 客服聊天</li>
          <li><span className="icon">✈️</span> 我的行程</li>
          <li><span className="icon">🏖️</span> 推薦景點</li>
          <li><span className="icon">⚙️</span> 設定</li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User Avatar" className="avatar" />
          <div className="user-details">
            <span className="user-name">王小明</span>
            <span className="user-status">線上</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
