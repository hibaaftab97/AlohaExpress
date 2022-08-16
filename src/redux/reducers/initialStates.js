const authReducer = {
  user: null,
  token:null,
  loggedin: false,
  isLoading: false,
  customer: {},
};

const commonReducer = {
  isLoading: false,
  attendance:false
};



const initialStates = {
  authReducer: authReducer,
  commonReducer: commonReducer,

};
export default initialStates;
