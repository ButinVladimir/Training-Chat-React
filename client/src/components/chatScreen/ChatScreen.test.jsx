import React from 'react';
import { mount } from 'enzyme';
import ChatScreen from './ChatScreen';
import testMessages from '../../helpers/testMessages';

describe('ChatScreen', () => {
  it('renders without crashing when not connected', () => {
    const component = mount(<ChatScreen connected={false} messages={[]} onClickUser={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when connected', () => {
    const component = mount(
      <ChatScreen
        connected
        messages={testMessages}
        onClickUser={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
