import { fetchApi } from '../../helpers/fetchApi';

const { types } = require('../types/types');

const sendText = (text) => {
  return {
    type: types.textSend,
    payload: text,
  };
};

export const StartSendText = (text) => {
  return async (dispatch) => {
    try {
      const resp = await fetchApi('hellow', text, 'POST');
      const body = await resp.json();
      console.log(body);
      const { data } = body;
      dispatch(sendText(data.text));
    } catch (error) {
      console.log(error);
    }
  };
};
