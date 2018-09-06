import React from 'react';
import { shallow } from 'enzyme';
import NotLoginnedMessage from './NotLoginnedMessage';

describe('NotLoginnedMessage', () => {
  it('renders without crashing', () => {
    const component = shallow(<NotLoginnedMessage />);
    expect(component).toMatchSnapshot();
  });
});
