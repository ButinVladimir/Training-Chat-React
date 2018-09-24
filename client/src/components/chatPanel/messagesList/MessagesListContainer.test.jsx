import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import MessagesListContainer from './MessagesListContainer';
import Message from '../../../helpers/Message';

describe('MessageContainer', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([]);
  });

  it('renders list of messages', () => {
    const store = mockStore({
      chatPanel: {
        messages: [
          new Message('id', 'date', 'from', ['to1', 'to2'], 'message'),
        ],
      },
    });
    const component = mount(
      <Provider store={store}>
        <MessagesListContainer
          id="id"
          date="date"
          from="from"
          to={['to1', 'to2']}
          message="message"
        />
      </Provider>,
    );

    const messages = component.find('MessagesList').find('Message');
    expect(messages).toHaveLength(1);
    expect(messages.at(0).props().id).toEqual('id');
  });
});
