import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from './App';
import { connect, disconnect, showError } from './redux/actions';
import getDefaultState from './redux/getDefaultState';
import { USER_ERROR } from './helpers/socketEvents';

describe('App', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore();
  });

  it('renders without crashing', () => {
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    expect(component).toMatchSnapshot();
        
    const appComponent = component.find('App');    
    const instance = appComponent.instance();
    expect(appComponent.state('mounted')).toEqual(true);

    expect(instance.socket.__mockHandlers.has('connect')).toEqual(true);
    expect(instance.socket.__mockHandlers.has('reconnect')).toEqual(true);
    expect(instance.socket.__mockHandlers.has('disconnect')).toEqual(true);
    expect(instance.socket.__mockHandlers.has('connect_error')).toEqual(true);
    expect(instance.socket.__mockHandlers.has('reconnect_error')).toEqual(true);
    expect(instance.socket.__mockHandlers.has('error')).toEqual(true);
    expect(instance.socket.__mockHandlers.has(USER_ERROR)).toEqual(true);
  });

  it('connects', () => {
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    let actions = store.getActions();
    let expectedActions = [];
    expect(actions).toEqual(expectedActions);

    const instance = component.find('App').instance();
    instance.socket.__mockHandlers.get('connect')();

    actions = store.getActions();
    expectedActions = [connect()];
    expect(actions).toEqual(expectedActions);
  });

  it('reconnects', () => {
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    let actions = store.getActions();
    let expectedActions = [];
    expect(actions).toEqual(expectedActions);

    const instance = component.find('App').instance();
    instance.socket.__mockHandlers.get('reconnect')();

    actions = store.getActions();
    expectedActions = [disconnect()];
    expect(actions).toEqual(expectedActions);
  });

  it('disconnects', () => {
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    let actions = store.getActions();
    let expectedActions = [];
    expect(actions).toEqual(expectedActions);

    const instance = component.find('App').instance();
    instance.socket.__mockHandlers.get('disconnect')();

    actions = store.getActions();
    expectedActions = [disconnect()];
    expect(actions).toEqual(expectedActions);
  });

  it('handles connect error', () => {
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    let actions = store.getActions();
    let expectedActions = [];
    expect(actions).toEqual(expectedActions);

    const instance = component.find('App').instance();
    instance.socket.__mockHandlers.get('connect_error')();

    actions = store.getActions();
    expectedActions = [showError('Connect error')];
    expect(actions).toEqual(expectedActions);
  });

  it('handles reconnect error', () => {
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    let actions = store.getActions();
    let expectedActions = [];
    expect(actions).toEqual(expectedActions);

    const instance = component.find('App').instance();
    instance.socket.__mockHandlers.get('reconnect_error')();

    actions = store.getActions();
    expectedActions = [showError('Reconnect error')];
    expect(actions).toEqual(expectedActions);
  });

  it('handles error', () => {
    const errorMessage = 'Some error occurred';
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    let actions = store.getActions();
    let expectedActions = [];
    expect(actions).toEqual(expectedActions);

    const instance = component.find('App').instance();
    instance.socket.__mockHandlers.get('error')({message: errorMessage});

    actions = store.getActions();
    expectedActions = [showError(`Error: ${errorMessage}`)];
    expect(actions).toEqual(expectedActions);
  });

  it('handles user error', () => {
    const errorMessage = 'Some error occurred';
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    let actions = store.getActions();
    let expectedActions = [];
    expect(actions).toEqual(expectedActions);

    const instance = component.find('App').instance();
    instance.socket.__mockHandlers.get(USER_ERROR)(errorMessage);

    actions = store.getActions();
    expectedActions = [showError(errorMessage)];
    expect(actions).toEqual(expectedActions);
  });

  it('handles unmounting', () => {
    const store = mockStore(getDefaultState());
    const component = mount(
      <Provider store={store}>
        <App url='testUrl' />
      </Provider>
    );

    const instance = component.find('App').instance();

    const disconnectMock = jest.fn();
    instance.socket.disconnect = disconnectMock;
    component.unmount();

    expect(disconnectMock).toHaveBeenCalledTimes(1);
    expect(disconnectMock).toHaveBeenCalledWith();
  });
});
