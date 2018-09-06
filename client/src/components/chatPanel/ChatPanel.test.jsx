import React from 'react';
import { shallow } from 'enzyme';
import ChatPanel from './ChatPanel';
import testMessages from '../../helpers/testMessages';

describe('ChatPanel', () => {
  it('renders without crashing when not connected', () => {
    const component = shallow(<ChatPanel connected={false} messages={[]} onClickUser={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when connected', () => {
    const component = shallow(
      <ChatPanel
        connected
        messages={testMessages}
        onClickUser={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
