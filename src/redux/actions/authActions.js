import * as types from '../types';
import { endpoints } from '../config';
import { post,  } from '../Api/index';
import { showToast } from '../Api/HelperFunction';


export const userLogin = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await post(endpoints.auth.login, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        dispatch({ type: types.LOGIN, payload: { token: res } });
        showToast('Logged in Successfully');
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const forgotpassword = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await post(endpoints.auth.forgotpassword, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

