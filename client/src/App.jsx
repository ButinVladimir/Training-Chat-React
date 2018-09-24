import React from 'react';
import ChatPanel from './components/chatPanel/ChatPanel';
import SpeechPanel from './components/speechPanel/SpeechPanelContainer';
import LoginPanel from './components/loginPanel/LoginPanelContainer';
import UsersPanel from './components/usersPanel/UsersPanelContainer';
import testMessages from './helpers/testMessages';
import './App.css';

const connected = true;

function App() {
  return (
    <div className="chat-app">
      <div className="chat-app-column grow">
        <div className="chat-app-row grow">
          <ChatPanel
            connected={connected}
          />
        </div>

        {connected && (
          <div className="chat-app-row">
            <SpeechPanel />
          </div>
        )}
      </div>

      {connected && (
        <div className="chat-app-column">
          <div className="chat-app-row">
            <LoginPanel />
          </div>
          <div className="chat-app-row grow">
            <UsersPanel />
          </div>
        </div>
      )}
    </div>);
}

export default App;
