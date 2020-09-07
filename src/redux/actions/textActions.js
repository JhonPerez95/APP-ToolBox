const { types } = require('../types/types');

export const sendText = (text) => {
  return {
    type: types.textSend,
    payload: text,
  };
};
