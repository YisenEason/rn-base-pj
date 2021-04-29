/* 
 * 网络封装
 * 请求拦截、相应拦截、错误统一处理
 */

import axios from 'axios';
import qs from 'querystring';
import { isEmpty } from '../utils/StringUtils';

const HOST = 'http://10.153.153.200:8081';
const BASE_API = '/gfunStore/api';

axios.defaults.baseURL = HOST + BASE_API;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

/**
 * 请求拦截
 */
axios.interceptors.request.use(
  config => {
    config.headers.Authorization = '';
    return config;
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    console.log(`http(${response.config.url}) response:  ${JSON.stringify(response.data)}`);
    
    if (response.data['code'] !== 200) {
      return Promise.reject(response);
    }
    return Promise.resolve(response);
  }, 
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
        case 404:
        case 500:
        default:
      }
      // return Promise.reject(error.response);
    }
  }
);


let Network = {

  /**
   * 发起post请求
   * @param url 地址
   * @param params param参数
   * @param body body参数
   * @returns 
   */
  post: (url: string, params: any, body: any) => {
    return new Promise((resolve, reject) => {
      if (params) {
        let paramString = qs.stringify(params);
        url += isEmpty(paramString) ? '' : `?${paramString}`;
      }
      axios.post(url, body)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
    });
  },

  /**
   * 发起get请求
   * @param url 地址
   * @param params param参数
   * @returns 
   */
  get: (url: string, params: any) => {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
    });
  }

}

export default Network;