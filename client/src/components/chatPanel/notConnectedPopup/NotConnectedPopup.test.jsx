import React from 'react';
import { shallow } from 'enzyme';
import NotConnectedPopup from './NotConnectedPopup';

describe('NotConnectedPopup', () => {
  it('renders without crashing', () => {
    const component = shallow(<NotConnectedPopup />);
    expect(component).toMatchSnapshot();
  });
});
