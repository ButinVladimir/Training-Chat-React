import React from 'react';
import { Socket } from 'socket.io-client';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import MessagesListContainer from './MessagesListContainer';
import Message from '../../../helpers/Message';
import { GET_MESSAGE as SOCKET_GET_MESSAGE } from '../../../helpers/socketEvents';
import { GET_MESSAGE as REDUX_GET_MESSAGE} from '../../../redux/actionTypes';

describe('MessageContainer', () => {
  let mockStore;
  let mockSocket;

  beforeEach(() => {
    mockStore = configureStore([]);
    mockSocket = new Socket();
  });

  it('renders list of messages', () => {
    const store = mockStore({
      chatPanel: {
        messages: [
          new Message('id', 'date', 'from', ['to1', 'to2'], 'message'),
        ],
      },
    });
    const component = mount(
      <Provider store={store}>
        <MessagesListContainer
          socket={mockSocket}
        />
      </Provider>,
    );

    const messages = component.find('MessagesList').find('Message');
    expect(component).toMatchSnapshot();
    expect(messages).toHaveLength(1);
    expect(messages.at(0).props().id).toEqual('id');
  });

  it('handles getting message', () => {
    const store = mockStore({
      chatPanel: {
        messages: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <MessagesListContainer
          socket={mockSocket}
        />
      </Provider>,
    );

    let actions = store.getActions();
    let expectedActions = [];

    expect(actions).toEqual(expectedActions);
    expect(mockSocket.__mockHandlers.has(SOCKET_GET_MESSAGE)).toEqual(true);
    mockSocket.__mockHandlers.get(SOCKET_GET_MESSAGE)('message', 'from', [], '', '');

    actions = store.getActions();
    expectedActions = [{ type: REDUX_GET_MESSAGE, message: 'message', from: 'from', to: []}];
    expect(actions).toMatchObject(expectedActions);
  });
});
