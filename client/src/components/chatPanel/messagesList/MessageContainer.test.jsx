import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import MessageContainer from './MessageContainer';
import Message from '../../../helpers/Message';
import { addTo } from '../../../redux/actions';

describe('MessageContainer', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([]);
  });

  it('handles click on from user', () => {
    const store = mockStore({
      chatPanel: {
        messages: [
          new Message('id', 'date', 'from', ['to1', 'to2'], 'message'),
        ],
      },
    });
    const component = mount(
      <Provider store={store}>
        <MessageContainer
          id="id"
          date="date"
          from="from"
          to={['to1', 'to2']}
          message="message"
        />
      </Provider>,
    );

    component.find('.user-select.from').simulate('click');
    const actions = store.getActions();
    const expectedAction = [addTo('from')];
    expect(actions).toEqual(expectedAction);
  });
});
