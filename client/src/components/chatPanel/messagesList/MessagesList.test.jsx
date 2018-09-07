import React from 'react';
import { shallow } from 'enzyme';
import MessagesList from './MessagesList';
import testMessages from '../../../helpers/testMessages';

describe('MessagesList', () => {
  it('renders without crashing', () => {
    const component = shallow(<MessagesList messages={testMessages} />);
    expect(component).toMatchSnapshot();
  });
});
