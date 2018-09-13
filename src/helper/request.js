import axios from 'axios';
// axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Accept'] = 'application/json'

// Add a request interceptor
axios.interceptors.request.use(
  config =>
  // Do something before request is sent
    config
  , error =>
  // Do something with request error
    Promise.reject(error.body),
);

// Add a response interceptor
axios.interceptors.response.use((res) => {
  if (res.status === 200 && res.statusText === 'OK') {
    return res.data;
  }
  return Promise.reject(new Error(res.data.msg));
}, (error) => {
  if (error.response.status === 401) {
    window.location.href = '/login';
  }
  if (error.response.data) {
    return Promise.reject(new Error(error.response.data.message || error.response.data.msg));
  }
  return Promise.reject(new Error(error.statusText));
});

export default axios;
