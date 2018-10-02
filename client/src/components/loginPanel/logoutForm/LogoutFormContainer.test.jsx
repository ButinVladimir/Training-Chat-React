import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import LogoutFormContainer from './LogoutFormContainer';
import { logout } from '../../../redux/actions';

describe('LogoutFormContainer', () => {
  const loginValue = '123';
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([]);
  });

  it('renders logout form', () => {
    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LogoutFormContainer />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('handles logout', () => {
    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LogoutFormContainer />
      </Provider>,
    );

    component.find('LogoutForm').find('.logout').simulate('click');

    const actions = store.getActions();
    const expectedAction = [logout()];
    expect(actions).toEqual(expectedAction);
  });
});
