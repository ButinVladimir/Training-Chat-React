import React from 'react';
import { shallow } from 'enzyme';
import ChatPanel from './ChatPanel';

describe('ChatPanel', () => {
  it('renders without crashing when not connected', () => {
    const component = shallow(<ChatPanel connected={false} onClickUser={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when connected', () => {
    const component = shallow(
      <ChatPanel
        connected
        onClickUser={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
