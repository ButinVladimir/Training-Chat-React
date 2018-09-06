import React from 'react';
import { shallow } from 'enzyme';
import LoginPanel from './LoginPanel';

describe('LoginPanel', () => {
  it('renders without crashing when not loginned', () => {
    const component = shallow(
      <LoginPanel
        loginned={false}
        login="login"
        onChangeLogin={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders without crashing when loginned', () => {
    const component = shallow(
      <LoginPanel
        loginned
        login="login"
        onChangeLogin={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
