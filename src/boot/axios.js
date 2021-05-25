import Vue from 'vue'
import axios from 'axios'
import { Notify } from 'quasar'

Vue.prototype.$axios = axios

let base_url = 'https://api.openbrewerydb.org/breweries'

Vue.prototype.$api = api

const api = axios.create({
    baseURL: base_url,
    timeout: 6000,
    // withCredentials: true // send cookies when cross-domain requests
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json"
    }
  });

// Request interceptors
  api.interceptors.request.use(function (config) {
    // config.headers["X-Access-Token"] = getToken();
    // config.headers.Authorization = `Bearer ${getToken()}`;
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    
      Notify.create({
        message: `Request Error | ${error.message}`,
      })
    return Promise.reject(error);
  });
  
  // Response interceptors
  api.interceptors.response.use(
    response => {
      let responseData = response.data;
      if ("data" in responseData) {
        responseData = responseData.data;
      }
  
      return responseData;
    },
    error => {
      const error_obj = { ...error };
      const { data, status } = error_obj.response;
   
      if (status >= 400 && status <= 499) {
        
        let messageType = ''

        if (status == 401) {
          messageType = 'Bad Authorization Response';
        } else {
          messageType =  'Bad Response Message'
        }
      
        Notify.create({
            message: `Response Error | ${messageType} - ${data.message}`,
        })
      }
      return Promise.reject({ ...error });
    }
  );

export { axios, api }