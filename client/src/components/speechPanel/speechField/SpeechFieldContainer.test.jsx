import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import SpeechFieldContainer from './SpeechFieldContainer';
import { changeSpeech } from '../../../redux/actions';
import { SAY } from '../../../redux/actionTypes';

describe('SpeechFieldContainer', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore();
  });

  it('renders without crashing', () => {
    const store = mockStore({
      speechPanel: {
        speech: 'speechValue',
        to: ['to1', 'to2', 'to3'],
      },
    });
    const component = mount(
      <Provider store={store}>
        <SpeechFieldContainer />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it('handles changing speech', () => {
    const store = mockStore({
      speechPanel: {
        speech: '',
        to: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <SpeechFieldContainer />
      </Provider>,
    );

    const newToValue = 'newToValue';
    component.find('input.speech').simulate('change', { target: { value: newToValue } });

    const actions = store.getActions();
    const expectedActions = [changeSpeech(newToValue)];
    expect(actions).toMatchObject(expectedActions);
  });

  it('handles saying', () => {
    const store = mockStore({
      speechPanel: {
        speech: 'speechValue',
        to: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <SpeechFieldContainer />
      </Provider>,
    );

    component.find('button.say').simulate('click');

    const actions = store.getActions();
    const expectedActions = [{ type: SAY }];
    expect(actions).toMatchObject(expectedActions);
  });
});
