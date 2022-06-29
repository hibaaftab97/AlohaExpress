export const urls = {
  v1: `http://aloha.testedwebsite.com/api/v1/`,
};

export const base_url = urls.v1;
export const endpoints = {
  auth: {
    login: 'login',
    forgotpassword:"forgot-password"
  },

 
};

const configs = {
  endpoints: endpoints,
  base_url: base_url,
};

export default configs;
