import '@testing-library/jest-dom';
import { types } from '../../../redux/types/types';
import { textReducer } from '../../../redux/reducer/textReducer';

describe('Test the Reducer textReducer', () => {
  const initialState = {};

  const action = {
    type: types.textSend,
    payload: 'Text de prueba',
  };

  test('should return state of type textSend ', () => {
    const resp = textReducer(initialState, action);
    expect(resp).toEqual({ textField: action.payload });
  });
});
