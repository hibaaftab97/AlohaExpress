import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.authReducer;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case types.LOGIN:
      return {
        ...state,
        user: action.payload.token,
        loggedin: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
