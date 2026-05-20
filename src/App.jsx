import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import ChatContainer from './components/chat/ChatContainer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <Navbar />
        <ChatContainer />
      </div>
    </div>
  );
}

export default App;
