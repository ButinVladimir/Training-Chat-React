import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <LoginForm
        login="login"
        onChangeLogin={() => {}}
        onLogin={() => {}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('handles changing login', () => {
    const mock = jest.fn();

    const component = shallow(
      <LoginForm
        login="login"
        onChangeLogin={mock}
        onLogin={() => {}}
      />,
    );

    const input = component.find('input');
    input.value = 'newLogin';
    input.simulate('change', { target: { value: 'value' } });

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('value');
  });

  it('handles click on login button correctly', () => {
    const mock = jest.fn();

    const component = shallow(
      <LoginForm
        login="login"
        onChangeLogin={() => {}}
        onLogin={mock}
      />,
    );

    component.find('button').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
