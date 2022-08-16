import * as types from '../types';
import { endpoints } from '../config';
import { post,  } from '../Api/index';
import { showToast } from '../Api/HelperFunction';


export const _timeIn = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await post(endpoints.vendors.timeIn, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        dispatch({
            type: types.TIMEIN,
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

export const timeOut = data => {
    console.log(data, 'loginData');
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch({
            type: types.LOADING_START,
          });
          const res = await post(endpoints.vendors.timeOut, data, true);
          dispatch({
            type: types.LOADING_END,
          });
          dispatch({
            type: types.TIMEOUT,
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