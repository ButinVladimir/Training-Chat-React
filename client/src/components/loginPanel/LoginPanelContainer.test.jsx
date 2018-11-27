import React from 'react';
import { Socket } from 'socket.io-client';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import LoginPanelContainer from './LoginPanelContainer';

describe('LoginPanelContainer', () => {
  let mockStore;
  let mockSocket;

  beforeEach(() => {
    mockStore = configureStore([]);
    mockSocket = new Socket();
  });

  it('renders login panel', () => {
    const store = mockStore({
      loginPanel: {
        login: 'login',
        loginned: true,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginPanelContainer socket={mockSocket} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
