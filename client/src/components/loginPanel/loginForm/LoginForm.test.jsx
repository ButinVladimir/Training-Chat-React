import React from 'react';
import { Socket } from 'socket.io-client';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';
import { LOGIN_SUCCESSFUL } from '../../../helpers/socketEvents';

describe('LoginForm', () => {
  let mockSocket;
  let handlers;

  beforeEach(() => {
    mockSocket = new Socket();
    handlers = new Map(); 
  });

  it('renders without crashing', () => {
    const component = shallow(
      <LoginForm
        login="login"
        socket={mockSocket}
        handlers={handlers}
        onChangeLogin={() => {}}
        onLogin={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('handles changing login', () => {
    const onChangeLoginMock = jest.fn();
    
    const component = shallow(
      <LoginForm
        login="login"
        socket={mockSocket}
        handlers={handlers}
        onChangeLogin={onChangeLoginMock}
        onLogin={() => {}}
      />,
    );

    component.find('input').simulate('change', { target: { value: 'value' } });

    expect(onChangeLoginMock).toHaveBeenCalledTimes(1);
    expect(onChangeLoginMock).toHaveBeenCalledWith('value');
  });

  it('handles click on login button correctly', () => {
    const mock = jest.fn();

    const component = shallow(
      <LoginForm
        login="login"
        socket={mockSocket}
        handlers={handlers}
        onChangeLogin={() => {}}
        onLogin={mock}
      />,
    );

    component.find('button').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('handles unmounting correctly', () => {
    mockSocket.on(LOGIN_SUCCESSFUL, () => {});
    handlers.set(LOGIN_SUCCESSFUL, () => {});

    const component = shallow(
      <LoginForm
        login="login"
        socket={mockSocket}
        handlers={handlers}
        onChangeLogin={() => {}}
        onLogin={() => {}}
      />,
    );

    component.unmount();
    expect(mockSocket.__mockHandlers.has(LOGIN_SUCCESSFUL)).toEqual(false);
  });
});
