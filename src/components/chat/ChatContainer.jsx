import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatContainer.css';

function ChatContainer() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '嗨！準備好開始你的下一趟旅程了嗎？有什麼我可以幫忙的嗎？',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSend = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: '收到您的訊息！我們的專員正在為您查詢，請稍候片刻。🏖️',
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <main className="chat-container">
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </main>
  );
}

export default ChatContainer;
