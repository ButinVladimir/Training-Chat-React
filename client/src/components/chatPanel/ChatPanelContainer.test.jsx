import React from 'react';
import { Socket } from 'socket.io-client';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ChatPanelContainer from './ChatPanelContainer';

describe('ChatPanelContainer', () => {
  let mockStore;
  let mockSocket;

  beforeEach(() => {
    mockStore = configureStore([]);
    mockSocket = new Socket();
  });

  it('renders chat panel', () => {
    const store = mockStore({
      errorPanel: {
        showError: false,
        error: '',
      },
      chatPanel: {
        messages: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <ChatPanelContainer socket={mockSocket} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('renders error panel', () => {
    const store = mockStore({
      errorPanel: {
        showError: true,
        error: 'An error',
      },
      chatPanel: {
        messages: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <ChatPanelContainer socket={mockSocket} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
