import React from 'react';
import { shallow } from 'enzyme';
import UsersPanel from './UsersPanel';

describe('UsersPanel', () => {
  it('renders without crashing', () => {
    const component = shallow(<UsersPanel usersList={['user 1', 'user 2']} onClickUser={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
