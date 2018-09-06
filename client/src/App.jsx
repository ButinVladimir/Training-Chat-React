import React from 'react';
import ChatPanel from './components/chatPanel/ChatPanel';
import SpeechPanel from './components/speechPanel/SpeechPanel';
import LoginPanel from './components/loginPanel/LoginPanel';
import UsersPanel from './components/usersPanel/UsersPanel';
import testMessages from './helpers/testMessages';
import './App.css';

const connected = true;
const loginned = true;
const login = 'xXxSonicSucksSocksxXx';

function App() {
  return (
    <div className="chat-app">
      <div className="chat-app-column grow">
        <div className="chat-app-row grow">
          <ChatPanel
            connected={connected}
            messages={testMessages}
            onClickUser={() => {}}
          />
        </div>

        {connected && (
          <div className="chat-app-row">
            <SpeechPanel
              speech="text"
              to={['f1', 'f2']}
              loginned={loginned}
              onChange={() => {}}
              onSay={() => {}}
              onRemoveTo={() => {}}
            />
          </div>
        )}
      </div>

      {connected && (
        <div className="chat-app-column">
          <div className="chat-app-row">
            <LoginPanel
              login={login}
              loginned={loginned}
              onChangeLogin={() => {}}
              onLogin={() => {}}
              onLogout={() => {}}
            />
          </div>
          <div className="chat-app-row grow">
            <UsersPanel
              usersList={['user1', 'user2', 'user3', 'user1', 'user2', 'user3', 'user1', 'user2', 'user3', 'user1', 'user2', 'user3', 'user1', 'user2', 'user3', 'user1', 'user2', 'user3', 'user1', 'user2', 'user3']}
              onClickUser={() => {}}
            />
          </div>
        </div>
      )}
    </div>);
}

export default App;
