import * as types from '../types';
import { endpoints } from '../config';
import { get,  } from '../Api/index';
import { showToast } from '../Api/HelperFunction';

export const getAllAppointments = () => {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // dispatch({
          //   type: types.LOADING_START,
          // });
          const res = await get(endpoints.vendors.getallAppointments);
          dispatch({
            type: types.LOADING_END,
          });
          return resolve(res);
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

  export const getprofile = () => {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // dispatch({
          //   type: types.LOADING_START,
          // });
          const res = await get(endpoints.vendors.getProfile);
          dispatch({
            type: types.LOADING_END,
          });
          return resolve(res);
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