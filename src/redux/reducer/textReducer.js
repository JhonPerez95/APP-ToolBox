import { types } from '../types/types';

const initialState = {
  textField: '',
};

export const textReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.textSend:
      console.log(payload);
      return {
        ...state,
        textField: payload,
      };
    default:
      return state;
  }
};
