import React from 'react';
import { Socket } from 'socket.io-client';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import LogoutFormContainer from './LogoutFormContainer';
import { logout } from '../../../redux/actions';
import { LOGOUT, LOGOUT_SUCCESSFUL } from '../../../helpers/socketEvents';

describe('LogoutFormContainer', () => {
  const loginValue = '123';
  let mockStore;
  let mockSocket;

  beforeEach(() => {
    mockStore = configureStore([]);
    mockSocket = new Socket();
  });

  it('renders logout form', () => {
    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LogoutFormContainer socket={mockSocket} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('handles logout', () => {
    mockSocket.emit = jest.fn();

    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LogoutFormContainer socket={mockSocket} />
      </Provider>,
    );

    component.find('LogoutForm').find('.logout').simulate('click');

    let actions = store.getActions();
    let expectedAction = [];    
    expect(actions).toEqual(expectedAction);

    expect(mockSocket.emit).toHaveBeenCalledTimes(1);
    expect(mockSocket.emit).toHaveBeenCalledWith(LOGOUT, loginValue);

    expect(mockSocket.__mockHandlers.has(LOGOUT_SUCCESSFUL)).toEqual(true);
    mockSocket.__mockHandlers.get(LOGOUT_SUCCESSFUL)();

    actions = store.getActions();
    expectedAction = [logout()];    
    expect(actions).toEqual(expectedAction);
  });
});
