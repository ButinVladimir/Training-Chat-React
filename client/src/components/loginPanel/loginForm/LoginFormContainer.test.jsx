import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import LoginFormContainer from './LoginFormContainer';
import { changeLogin, login } from '../../../redux/actions';

describe('LoginFormContainer', () => {
  const loginValue = '123';
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([]);
  });

  it('renders login form', () => {
    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginFormContainer />
      </Provider>,
    );

    const componentLoginValue = component.find('LoginForm').find('input').props().value;
    expect(componentLoginValue).toEqual(loginValue);
  });

  it('handles changing login', () => {
    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginFormContainer />
      </Provider>,
    );

    const newLoginValue = 'newLogin';
    component.find('LoginForm').find('input').simulate('change', { target: { value: newLoginValue } });

    const actions = store.getActions();
    const expectedAction = [changeLogin(newLoginValue)];
    expect(actions).toEqual(expectedAction);
  });

  it('handles loginning', () => {
    const store = mockStore({
      loginPanel: {
        login: loginValue,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginFormContainer />
      </Provider>,
    );

    component.find('LoginForm').find('button').simulate('click');

    const actions = store.getActions();
    const expectedAction = [login()];
    expect(actions).toEqual(expectedAction);
  });
});
