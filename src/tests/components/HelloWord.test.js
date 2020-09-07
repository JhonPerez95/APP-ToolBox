import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { StartSendText } from '../../redux/actions/textActions';
import HelloWord from '../../componets/HelloWord';

// Config Store Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = { text: { textField: '' } };
let store = mockStore(initState);
store.dispatch = jest.fn();

// Simulation action
jest.mock('../../redux/actions/textActions', () => {
  StartSendText: jest.fn();
});

describe('Test the component HelloWord', () => {
  const wrapper = mount(
    <Provider store={store}>
      <HelloWord />
    </Provider>
  );

  test('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
