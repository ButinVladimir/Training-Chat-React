import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User', () => {
  it('renders without crashing', () => {
    const component = shallow(<User user="user" onClickUser={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('handles click on user', () => {
    const mock = jest.fn();
    const component = shallow(<User user="user" onClickUser={mock} />);

    component.find('.user-select').simulate('click');

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('user');
  });
});
