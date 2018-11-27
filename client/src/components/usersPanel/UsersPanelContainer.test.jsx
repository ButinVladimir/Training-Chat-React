import React from 'react';
import { Socket } from 'socket.io-client';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import UsersPanelContainer from './UsersPanelContainer';
import { userAppears, userDisappears, updateUserList } from '../../redux/actions';
import { USER_APPEARS, USER_DISAPPEARS, UPDATE_USER_LIST } from '../../helpers/socketEvents';

describe('UsersPanelContainer', () => {
  let mockStore;
  let mockSocket;

  beforeEach(() => {
    mockStore = configureStore();
    mockSocket = new Socket();
  });

  it('renders without crashing', () => {
    const store = mockStore({
      usersPanel: {
        usersList: ['user1', 'user2', 'user3'],
      },
    });
    const component = mount(
      <Provider store={store}>
        <UsersPanelContainer socket={mockSocket} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();

    expect(mockSocket.__mockHandlers.has(USER_APPEARS)).toEqual(true);
    expect(mockSocket.__mockHandlers.has(USER_DISAPPEARS)).toEqual(true);
    expect(mockSocket.__mockHandlers.has(UPDATE_USER_LIST)).toEqual(true);
  });

  it('handles appearance of new user', () => {
    const store = mockStore({
      usersPanel: {
        usersList: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <UsersPanelContainer socket={mockSocket} />
      </Provider>,
    );

    let actions = store.getActions();
    let expectedAction = [];
    expect(actions).toEqual(expectedAction);

    mockSocket.__mockHandlers.get(USER_APPEARS)('user');   

    actions = store.getActions();
    expectedAction = [userAppears('user')];
    expect(actions).toEqual(expectedAction);
  });

  it('handles disappearance of new user', () => {
    const store = mockStore({
      usersPanel: {
        usersList: ['user'],
      },
    });
    const component = mount(
      <Provider store={store}>
        <UsersPanelContainer socket={mockSocket} />
      </Provider>,
    );

    let actions = store.getActions();
    let expectedAction = [];
    expect(actions).toEqual(expectedAction);

    mockSocket.__mockHandlers.get(USER_DISAPPEARS)('user');   

    actions = store.getActions();
    expectedAction = [userDisappears('user')];
    expect(actions).toEqual(expectedAction);
  });

  it('handles user list update', () => {
    const store = mockStore({
      usersPanel: {
        usersList: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <UsersPanelContainer socket={mockSocket} />
      </Provider>,
    );
    const users = ['user1', 'user2', 'user3'];

    let actions = store.getActions();
    let expectedAction = [];
    expect(actions).toEqual(expectedAction);

    mockSocket.__mockHandlers.get(UPDATE_USER_LIST)(users);

    actions = store.getActions();
    expectedAction = [updateUserList(users)];
    expect(actions).toEqual(expectedAction);
  });
});
