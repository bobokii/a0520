import React from 'react';
import './MessageBubble.css';

function MessageBubble({ message }) {
  const isUser = message.sender === 'user';
  return (
    <div className={`message-wrapper ${isUser ? 'user' : 'bot'}`}>
      {!isUser && (
        <div className="avatar-wrapper bot-avatar">
          🤖
        </div>
      )}
      <div className="message-content">
        <div className="message-bubble">
          {message.text}
        </div>
        <span className="message-time">{message.time}</span>
      </div>
      {isUser && (
        <div className="avatar-wrapper user-avatar">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
        </div>
      )}
    </div>
  );
}

export default MessageBubble;
