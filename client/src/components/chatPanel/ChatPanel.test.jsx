import React from 'react';
import { Socket } from 'socket.io-client';
import { shallow } from 'enzyme';
import ChatPanel from './ChatPanel';

describe('ChatPanel', () => {
  let mockSocket;

  beforeEach(() => {
    mockSocket = new Socket();
  });

  it('renders without crashing when error is shown', () => {
    const component = shallow(<ChatPanel showError socket={mockSocket} />);
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when connected', () => {
    const component = shallow(
      <ChatPanel showError={false} socket={mockSocket} />,
    );
    expect(component).toMatchSnapshot();
  });
});
