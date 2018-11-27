import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ErrorPanelContainer from './ErrorPanelContainer';
import { hideError } from '../../../redux/actions';

describe('ErrorPanelContainer', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([]);
  });

  it('renders error panel', () => {
    const store = mockStore({
      errorPanel: {
        showError: true,
        error: 'error',
      },
    });
    const component = mount(
      <Provider store={store}>
        <ErrorPanelContainer />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('handles closing error panel', () => {
    const store = mockStore({
      errorPanel: {
        showError: true,
        error: 'error',
      },
    });
    const component = mount(
      <Provider store={store}>
        <ErrorPanelContainer />
      </Provider>,
    );

    let actions = store.getActions();
    let expectedActions = [];
    expect(actions).toEqual(expectedActions);

    component.find('.close-button').simulate('click');

    actions = store.getActions();
    expectedActions = [hideError()];
    expect(actions).toEqual(expectedActions);
  });
});
