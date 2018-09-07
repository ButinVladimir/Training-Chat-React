import React from 'react';
import { shallow } from 'enzyme';
import LoginPanel from './LoginPanel';

describe('LoginPanel', () => {
  it('renders without crashing when not loginned', () => {
    const component = shallow(
      <LoginPanel loginned={false} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when loginned', () => {
    const component = shallow(
      <LoginPanel loginned />,
    );
    expect(component).toMatchSnapshot();
  });
});
