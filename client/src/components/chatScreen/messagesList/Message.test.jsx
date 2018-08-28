import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
  it('renders without crashing when message has been sent to all', () => {
    const component = shallow(
      <Message
        id="1"
        date="8/28/2018"
        from="fromUser"
        to={[]}
        message="testMessage1"
        onClickUser={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when message has been sent to 1 recipient', () => {
    const component = shallow(
      <Message
        id="1"
        date="8/28/2018"
        from="fromUser"
        to={['recipient 1']}
        message="testMessage1"
        onClickUser={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when message has been sent to 2 recipients', () => {
    const component = shallow(
      <Message
        id="1"
        date="8/28/2018"
        from="fromUser"
        to={['recipient 1', 'recipient 2']}
        message="testMessage1"
        onClickUser={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when message has been sent to 3 recipients', () => {
    const component = shallow(
      <Message
        id="1"
        date="8/28/2018"
        from="fromUser"
        to={['recipient 1', 'recipient 2', 'recipient 3']}
        message="testMessage1"
        onClickUser={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
