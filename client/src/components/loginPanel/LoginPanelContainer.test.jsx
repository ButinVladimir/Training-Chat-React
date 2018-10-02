import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import LoginPanelContainer from './LoginPanelContainer';

describe('LoginPanelContainer', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([]);
  });

  it('renders login panel', () => {
    const store = mockStore({
      loginPanel: {
        login: 'login',
        loginned: true,
      },
    });
    const component = mount(
      <Provider store={store}>
        <LoginPanelContainer />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
