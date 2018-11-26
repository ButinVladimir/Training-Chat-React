import React from 'react';
import { shallow } from 'enzyme';
import ErrorPanel from './ErrorPanel';

describe('ErrorPanel', () => {
  it('renders without crashing', () => {
    const component = shallow(<ErrorPanel />);
    expect(component).toMatchSnapshot();
  });
});
