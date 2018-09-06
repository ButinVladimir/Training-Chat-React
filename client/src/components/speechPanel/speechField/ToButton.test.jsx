import React from 'react';
import { shallow } from 'enzyme';
import ToButton from './ToButton';

describe('ToButton', () => {
  it('renders without crashing', () => {
    const component = shallow(<ToButton to="recipient" onRemoveTo={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('handles click', () => {
    const mock = jest.fn();
    const component = shallow(<ToButton to="recipient" onRemoveTo={mock} />);
    component.find('button').simulate('click');

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('recipient');
  });
});
