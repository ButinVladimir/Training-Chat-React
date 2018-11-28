import React from 'react';
import { Socket } from 'socket.io-client';
import { shallow } from 'enzyme';
import SpeechPanel from './SpeechPanel';

describe('SpeechPanel', () => {
  let mockSocket;

  beforeEach(() => {
    mockSocket = new Socket();
  });

  it('renders without crashing when not loginned', () => {
    const component = shallow(
      <SpeechPanel loginned={false} socket={mockSocket} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when loginned', () => {
    const component = shallow(
      <SpeechPanel loginned socket={mockSocket} />,
    );
    expect(component).toMatchSnapshot();
  });
});
