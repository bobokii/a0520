import React, { useState } from 'react';
import './MessageInput.css';

function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit} className="message-input-form">
        <button type="button" className="attachment-btn">📎</button>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="輸入您的訊息..."
          rows="1"
        />
        <button type="submit" className={`send-btn ${text.trim() ? 'active' : ''}`}>
          ➤
        </button>
      </form>
    </div>
  );
}

export default MessageInput;
