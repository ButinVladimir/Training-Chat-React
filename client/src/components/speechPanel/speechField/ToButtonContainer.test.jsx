import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ToButtonContainer from './ToButtonContainer';
import { removeTo } from '../../../redux/actions';

describe('ToButtonContainer', () => {
  const toValue = 'to';
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore();
  });

  it('renders without crashing', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <ToButtonContainer to={toValue} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('handles click', () => {
    const store = mockStore({});
    const component = mount(
      <Provider store={store}>
        <ToButtonContainer to={toValue} />
      </Provider>,
    );

    component.find('button.to-button').simulate('click');
    const actions = store.getActions();
    const expectedActions = [removeTo(toValue)];
    expect(actions).toEqual(expectedActions);
  });
});
