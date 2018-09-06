import React from 'react';
import { shallow } from 'enzyme';
import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders without crashing', () => {
    const component = shallow(<LogoutForm login="login" onLogout={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('handles click on logout button', () => {
    const mock = jest.fn();
    const component = shallow(<LogoutForm login="login" onLogout={mock} />);

    component.find('.logout').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
