import React from 'react';
import { Socket } from 'socket.io-client';
import { shallow } from 'enzyme';
import MessagesList from './MessagesList';
import testMessages from '../../../helpers/testMessages';
import { GET_MESSAGE } from '../../../helpers/socketEvents';

describe('MessagesList', () => {
  let mockSocket;
  let handlers;

  beforeEach(() => {
    mockSocket = new Socket();
    handlers = new Map(); 
  });

  it('renders without crashing', () => {
    const component = shallow(
      <MessagesList
        messages={testMessages}
        socket={mockSocket}
        handlers={handlers}
      />);
    expect(component).toMatchSnapshot();
  });

  it('handles unmounting correctly', () => {
    mockSocket.on(GET_MESSAGE, () => {});
    handlers.set(GET_MESSAGE, () => {});

    const component = shallow(
      <MessagesList
        messages={testMessages}
        socket={mockSocket}
        handlers={handlers}
      />);

    component.unmount();
    expect(mockSocket.__mockHandlers.has(GET_MESSAGE)).toEqual(false);
  });
});
