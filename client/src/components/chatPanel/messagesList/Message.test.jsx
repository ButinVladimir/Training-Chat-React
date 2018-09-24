import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message', () => {
  it('renders without crashing when message has been sent to all and to is null', () => {
    const component = shallow(
      <Message
        id="1"
        date="8/28/2018"
        from="fromUser"
        to={null}
        message="testMessage1"
        onClickUser={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when message has been sent to all and to is not null', () => {
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

  it('handles click on from user correctly', () => {
    const mock = jest.fn();

    const component = shallow(
      <Message
        id="1"
        date="8/28/2018"
        from="fromUser"
        to={[]}
        message="testMessage1"
        onClickUser={mock}
      />,
    );

    component.find('button.from').simulate('click');

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('fromUser');
  });

  it('handles click on to user correctly', () => {
    const mock = jest.fn();

    const component = shallow(
      <Message
        id="1"
        date="8/28/2018"
        from="fromUser"
        to={['toUser1', 'toUser2']}
        message="testMessage1"
        onClickUser={mock}
      />,
    );

    component.find('button.to').forEach(w => w.simulate('click'));

    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith('toUser1');
    expect(mock).toHaveBeenCalledWith('toUser2');
  });
});
