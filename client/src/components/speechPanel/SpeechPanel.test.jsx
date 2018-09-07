import React from 'react';
import { shallow } from 'enzyme';
import SpeechPanel from './SpeechPanel';

describe('SpeechPanel', () => {
  it('renders without crashing when not loginned', () => {
    const component = shallow(
      <SpeechPanel loginned={false} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when loginned', () => {
    const component = shallow(
      <SpeechPanel loginned />,
    );
    expect(component).toMatchSnapshot();
  });
});
