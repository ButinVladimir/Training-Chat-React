import React from 'react';
import { mount } from 'enzyme';
import MessagesList from './MessagesList';
import testMessages from '../../../helpers/testMessages';

describe('MessagesList', () => {
  it('renders without crashing', () => {
    const component = mount(<MessagesList messages={testMessages} onClickUser={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
