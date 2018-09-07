import React from 'react';
import { shallow } from 'enzyme';
import SpeechField from './SpeechField';

describe('SpeechField', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <SpeechField
        speech="123"
        to={[]}
        onChange={() => {}}
        onSay={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when message is being sent to 1 recipient', () => {
    const component = shallow(
      <SpeechField
        speech="123"
        to={['recipient1']}
        onChange={() => {}}
        onSay={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when message is being sent to 2 recipients', () => {
    const component = shallow(
      <SpeechField
        speech="123"
        to={['recipient1', 'recipient2']}
        onChange={() => {}}
        onSay={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when message is being sent to 3 recipients', () => {
    const component = shallow(
      <SpeechField
        speech="123"
        to={['recipient1', 'recipient2', 'recipient3']}
        onChange={() => {}}
        onSay={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('handles speech change', () => {
    const mock = jest.fn();
    const component = shallow(
      <SpeechField
        speech="123"
        to={[]}
        onChange={mock}
        onSay={() => {}}
      />,
    );

    const input = component.find('input.speech');
    input.value = 'aaa';
    input.simulate('change', { target: { value: 'value' } });

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('value');
  });

  it('handles saying', () => {
    const mock = jest.fn();
    const component = shallow(
      <SpeechField
        speech="123"
        to={[]}
        onChange={() => {}}
        onSay={mock}
      />,
    );
    const input = component.find('button.say');
    input.simulate('click');

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
