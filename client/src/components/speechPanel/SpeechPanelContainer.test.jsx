import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import SpeechPanelContainer from './SpeechPanelContainer';

describe('SpeechPanelContainer', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore();
  });

  it('renders without crashing', () => {
    const store = mockStore({
      loginPanel: {
        loginned: true,
      },
      speechPanel: {
        speech: 'speechValue',
        to: [],
      },
    });
    const component = mount(
      <Provider store={store}>
        <SpeechPanelContainer />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
