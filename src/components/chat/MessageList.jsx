import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import './MessageList.css';

function MessageList({ messages }) {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-list">
      <div className="message-list-welcome">
        <span className="welcome-icon">✨</span>
        <p>歡迎來到 TravelBot 客服中心</p>
        <small>我們的客服團隊會盡快為您解答旅遊相關問題</small>
      </div>
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
}

export default MessageList;
