import React from 'react';
import { Socket } from 'socket.io-client';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import SpeechFieldContainer from './SpeechFieldContainer';
import { changeSpeech, showError } from '../../../redux/actions';
import { SAY } from '../../../redux/actionTypes';
import { SEND_MESSAGE } from '../../../helpers/socketEvents';

describe('SpeechFieldContainer', () => {
  const speechValue = 'speechValue';
  let mockStore;
  let mockSocket;

  beforeEach(() => {
    mockStore = configureStore();
    mockSocket = new Socket();
  });

  it('renders without crashing', () => {
    const store = mockStore({
      speechPanel: {
        speech: speechValue,
        to: ['to1', 'to2', 'to3'],
      },
    });
    const component = mount(
      <Provider store={store}>
        <SpeechFieldContainer socket={mockSocket} />
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
        <SpeechFieldContainer socket={mockSocket} />
      </Provider>,
    );

    const newToValue = 'newToValue';
    component.find('input.speech').simulate('change', { target: { value: newToValue } });

    const actions = store.getActions();
    const expectedActions = [changeSpeech(newToValue)];
    expect(actions).toMatchObject(expectedActions);
  });

  it('handles saying', () => {
    mockSocket.emit = jest.fn();

    const store = mockStore({
      speechPanel: {
        speech: speechValue,
        to: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <SpeechFieldContainer socket={mockSocket} />
      </Provider>,
    );

    component.find('button.say').simulate('click');

    const actions = store.getActions();
    const expectedActions = [{ type: SAY }];
    expect(actions).toMatchObject(expectedActions);

    expect(mockSocket.emit).toHaveBeenCalledTimes(1);
    expect(mockSocket.emit).toHaveBeenCalledWith(SEND_MESSAGE, speechValue, []);
  });

  it('handles empty speech', () => {
    const store = mockStore({
      speechPanel: {
        speech: '',
        to: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <SpeechFieldContainer socket={mockSocket} />
      </Provider>,
    );

    component.find('button.say').simulate('click');

    const actions = store.getActions();
    const expectedActions = [showError('Speech cannot be empty')];
    expect(actions).toMatchObject(expectedActions);
  });
});
