import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import UsersPanelContainer from './UsersPanelContainer';

describe('UsersPanelContainer', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore();
  });

  it('renders without crashing', () => {
    const store = mockStore({
      usersPanel: {
        usersList: ['user1', 'user2', 'user3'],
      },
    });
    const component = mount(
      <Provider store={store}>
        <UsersPanelContainer />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
