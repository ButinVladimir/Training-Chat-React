import React from 'react';
import { Socket } from 'socket.io-client';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import LoginFormContainer from './LoginFormContainer';
import { changeLogin, login, showError } from '../../../redux/actions';
import { LOGIN, LOGIN_SUCCESSFUL } from '../../../helpers/socketEvents';

describe('LoginFormContainer', () => {
  const loginValue = '123';
  let mockStore;
  let mockSocket;

  beforeEach(() => {
    mockStore = configureStore([]);
    mockSocket = new Socket();
  });

  it('renders login form', () => {
    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginFormContainer socket={mockSocket} />
      </Provider>,
    );

    const componentLoginValue = component.find('LoginForm').find('input').props().value;
    expect(componentLoginValue).toEqual(loginValue);
  });

  it('handles changing login', () => {
    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginFormContainer socket={mockSocket} />
      </Provider>,
    );

    const newLoginValue = 'newLogin';
    component.find('LoginForm').find('input').simulate('change', { target: { value: newLoginValue } });

    const actions = store.getActions();
    const expectedAction = [changeLogin(newLoginValue)];
    expect(actions).toEqual(expectedAction);
  });

  it('handles loginning', () => {
    mockSocket.emit = jest.fn();

    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginFormContainer socket={mockSocket} />
      </Provider>,
    );

    component.find('LoginForm').find('button').simulate('click');

    let actions = store.getActions();
    let expectedAction = [];
    expect(actions).toEqual(expectedAction);

    expect(mockSocket.emit).toHaveBeenCalledTimes(1);
    expect(mockSocket.emit).toHaveBeenCalledWith(LOGIN, loginValue);

    expect(mockSocket.__mockHandlers.has(LOGIN_SUCCESSFUL)).toEqual(true);
    mockSocket.__mockHandlers.get(LOGIN_SUCCESSFUL)();

    actions = store.getActions();
    expectedAction = [login()];
    expect(actions).toEqual(expectedAction);
  });

  it('handles empty login', () => {
    const store = mockStore({
      loginPanel: {
        login: '',
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginFormContainer socket={mockSocket} />
      </Provider>,
    );

    component.find('LoginForm').find('button').simulate('click');

    let actions = store.getActions();
    let expectedAction = [showError('Login can\'t be empty')];

    expect(actions).toEqual(expectedAction);
  });
});
