import axios from "axios";

/*--------------------------------------------------------------------------------*/
/*  Create a new instance of axios with a custom config and basic authentication. */
/*--------------------------------------------------------------------------------*/
const axiosInstance = axios.create({
  timeout: 10000,
  responseType: 'json',
  baseURL : "http://localhost/admin/",
  auth: {
    username: import.meta.env.VITE_API_USER,
    password: import.meta.env.VITE_API_PASSWORD
  },
});

/*--------------------------------------------------------------------------------*/
/*  generic function to make API requests using the axios instance.               */
/*--------------------------------------------------------------------------------*/
const apiRequest = async (method, url, request) => {
  return axiosInstance({
    method,
    url,
    data: request,
  })
  .then(res => {
    return Promise.resolve(res.data);
  })
  .catch(err => {
    return Promise.reject(err);
  });
};

/*--------------------------------------------------------------------------------*/
/* helper functions for each HTTP method to simplify the API calls.               */
/*--------------------------------------------------------------------------------*/
const request_get = (url, request) => apiRequest("get", url, request);
const request_delete = (url, request) => apiRequest("delete", url, request);
const request_post = (url, request) => apiRequest("post", url, request);
const request_put = (url, request) => apiRequest("put", url, request);
const request_patch = (url, request) => apiRequest("patch", url, request);

// expose the methods to other services
export default {
  get: request_get,
  delete: request_delete,
  post: request_post,
  put: request_put,
  patch: request_patch 
};