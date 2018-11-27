import React from 'react';
import { Socket } from 'socket.io-client';
import { shallow } from 'enzyme';
import LoginPanel from './LoginPanel';

describe('LoginPanel', () => {
  let mockSocket;

  beforeEach(() => {
    mockSocket = new Socket();
  });

  it('renders without crashing when not loginned', () => {
    const component = shallow(
      <LoginPanel loginned={false} socket={mockSocket} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when loginned', () => {
    const component = shallow(
      <LoginPanel loginned socket={mockSocket} />,
    );
    expect(component).toMatchSnapshot();
  });
});
