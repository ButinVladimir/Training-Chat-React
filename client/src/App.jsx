import React, { Component } from 'react';
import { connect as reduxConnect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import ChatPanel from './components/chatPanel/ChatPanelContainer';
import SpeechPanel from './components/speechPanel/SpeechPanelContainer';
import LoginPanel from './components/loginPanel/LoginPanelContainer';
import UsersPanel from './components/usersPanel/UsersPanelContainer';
import { connect, disconnect, showError } from './redux/actions';
import { USER_ERROR } from './socket-events';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    const {
      url,
      onConnect,
      onError,
      onDisconnect,
    } = this.props;
    this.socket = io(url);

    this.socket.on('connect', () => {
      onConnect();
    });

    this.socket.on('reconnect', () => {
      onDisconnect();
    });

    this.socket.on('disconnect', () => {
      onDisconnect();
    });

    this.socket.on('connect_error', () => {
      onError('Connect error');
    });

    this.socket.on('reconnect_error', () => {
      onError('Reconnect error');
    });

    this.socket.on('error', (err) => {
      onError(`Error: ${err.message}`);
    });

    this.socket.on(USER_ERROR, (err) => {
      onError(err);
    });

    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  render() {
    const { mounted } = this.state;

    return mounted && (
      <div className="chat-app">
        <div className="chat-app-column grow">
          <div className="chat-app-row grow">
            <ChatPanel socket={this.socket} />
          </div>

          <div className="chat-app-row">
            <SpeechPanel socket={this.socket} />
          </div>
        </div>

        <div className="chat-app-column">
          <div className="chat-app-row">
            <LoginPanel socket={this.socket} />
          </div>
          <div className="chat-app-row grow">
            <UsersPanel socket={this.socket} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  url: PropTypes.string.isRequired,
  onConnect: PropTypes.func.isRequired,
  onDisconnect: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onConnect: () => dispatch(connect()),
  onDisconnect: () => dispatch(disconnect()),
  onError: err => dispatch(showError(err)),
});

const AppContainer = reduxConnect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
