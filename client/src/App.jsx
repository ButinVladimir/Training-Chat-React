import React from 'react';
import ChatScreen from './components/chatScreen/ChatScreen';
import testMessages from './helpers/testMessages';
import './App.css';

function App() {
  return (
    <div className="chat-app">
      <div className="chat-app-column">
        <div className="chat-app-row">
          <ChatScreen
            connected
            messages={testMessages}
            onClickUser={() => {}}
          />
        </div>
        <div className="chat-app-row" />
      </div>
      <div className="chat-app-column">
        <div className="chat-app-row" />
        <div className="chat-app-row" />
      </div>
    </div>);
}

export default App;
