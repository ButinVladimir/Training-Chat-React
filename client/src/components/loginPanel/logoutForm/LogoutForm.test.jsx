import React from 'react';
import { Socket } from 'socket.io-client';
import { shallow } from 'enzyme';
import LogoutForm from './LogoutForm';
import { LOGOUT_SUCCESSFUL } from '../../../helpers/socketEvents';

describe('LogoutForm', () => {
  let mockSocket;
  let handlers;

  beforeEach(() => {
    mockSocket = new Socket();
    handlers = new Map(); 
  });

  it('renders without crashing', () => {
    const component = shallow(
      <LogoutForm
        login="login"
        socket={mockSocket}
        handlers={handlers}
        onLogout={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('handles click on logout button', () => {
    const mock = jest.fn();
    const component = shallow(
      <LogoutForm
        login="login"        
        socket={mockSocket}
        handlers={handlers}
        onLogout={mock}
      />
    );

    component.find('.logout').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('handles unmounting correctly', () => {
    mockSocket.on(LOGOUT_SUCCESSFUL, () => {});
    handlers.set(LOGOUT_SUCCESSFUL, () => {});

    const component = shallow(
      <LogoutForm
        login="login"
        socket={mockSocket}
        handlers={handlers}
        onLogout={() => {}}
      />,
    );

    component.unmount();
    expect(mockSocket.__mockHandlers.has(LOGOUT_SUCCESSFUL)).toEqual(false);
  });
});
