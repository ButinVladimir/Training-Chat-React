import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import UserContainer from './UserContainer';
import { addTo } from '../../../redux/actions';

describe('UserContainer', () => {
  const testUser = 'user3';
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore();
  });

  it('renders without crashing', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <UserContainer user={testUser} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('handles click', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <UserContainer user={testUser} />
      </Provider>,
    );

    component.find('button').simulate('click');

    const actions = store.getActions();
    const expectedAction = [addTo(testUser)];
    expect(actions).toEqual(expectedAction);
  });
});
