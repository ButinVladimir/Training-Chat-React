import React from 'react';
import { Socket } from 'socket.io-client';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import SpeechPanelContainer from './SpeechPanelContainer';

describe('SpeechPanelContainer', () => {
  let mockStore;
  let mockSocket;

  beforeEach(() => {
    mockStore = configureStore();
    mockSocket = new Socket();
  });

  it('renders without crashing', () => {
    const store = mockStore({
      loginPanel: {
        loginned: true,
      },
      speechPanel: {
        speech: 'speechValue',
        to: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <SpeechPanelContainer socket={mockSocket} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
