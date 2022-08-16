export const urls = {
  v1: `http://aloha.testedwebsite.com/api/v1/`,
};

export const base_url = urls.v1;
export const endpoints = {
  auth: {
    login: 'login',
    logout: 'logout',

    forgotpassword:"forgot-password",
    verifycode:"verify",
    resetpassword:"reset-password"
  },
vendors:{
  getallAppointments:"vendors/appointment",
  getProfile:"vendors/profile",
  updateProfile:"vendors/edit",

  timeIn:"vendors/time-in",
  timeOut:"vendors/time-out"

}
 
};

const configs = {
  endpoints: endpoints,
  base_url: base_url,
};

export default configs;
