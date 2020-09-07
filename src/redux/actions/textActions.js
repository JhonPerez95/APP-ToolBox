import { fetchApi } from '../../helpers/fetchApi';
import Swal from 'sweetalert2';
const { types } = require('../types/types');

const sendText = (text) => {
  return {
    type: types.textSend,
    payload: text,
  };
};

// Actions Asyns
export const StartSendText = (text) => {
  return async (dispatch) => {
    try {
      const resp = await fetchApi('hellow', text, 'POST');
      const body = await resp.json();
      const { data, ok } = body;
      if (ok) {
        dispatch(sendText(data.text));
      } else {
        Swal.fire('Error!', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  };
};
