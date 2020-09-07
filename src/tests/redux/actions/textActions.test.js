import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { StartSendText } from '../../../redux/actions/textActions';
import { types } from '../../../redux/types/types';

// Config Store Redux
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
let store = mockStore(initState);

describe('test the actions textActions', () => {
  // Refresh store
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('should  call  the actions sendText ', async () => {
    const data = {
      text: 'Test input',
    };
    await store.dispatch(StartSendText(data));
    const resAction = store.getActions();
    // console.log(resAction[0]);
    expect(resAction[0]).toEqual({
      type: types.textSend,
      payload: data.text,
    });
  });
});
