import React from 'react';
import { shallow } from 'enzyme';
import SpeechPanel from './SpeechPanel';

describe('SpeechPanel', () => {
  it('renders without crashing when not loginned', () => {
    const component = shallow(
      <SpeechPanel
        loginned={false}
        speech="123"
        to={[]}
        onChange={() => {}}
        onSay={() => {}}
        onRemoveTo={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when loginned', () => {
    const component = shallow(
      <SpeechPanel
        loginned
        speech="123"
        to={['to1', 'to2']}
        onChange={() => {}}
        onSay={() => {}}
        onRemoveTo={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
