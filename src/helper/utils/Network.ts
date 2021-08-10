/* 
 * 网络封装
 * 请求拦截、相应拦截、错误统一处理
 */

import axios from 'axios';
import qs from 'querystring';
import { Alert, Platform } from 'react-native';
import BaseResp from '../../dto/BaseResp';

const HOST = '';
const BASE_API = '';

const os = Platform.OS;

const service = axios.create({
  baseURL: HOST + BASE_API,
  timeout: 5000
})

/**
 * 请求拦截
 */
service.interceptors.request.use(
  config => {
    config.headers.post['Content-Type'] = 'application/json';
    config.headers.post['Accept'] = 'application/json';
    config.headers.Authorization = '';
    config.headers.os = os;
    return config;
  }
);

// 响应拦截
service.interceptors.response.use(
  response => {
    let res = response.data;
    switch (res.code) {
      case 200:{
        return Promise.resolve(res);
      }
      case -1:{
      }
      default:
        Alert.alert(res.msg);
        break;
    }
    return Promise.reject(res);
  }, 
  error => {            
    let msg;
    if (error.response) {
      const res = error.response.data
      switch (res.status) {
        case 401:
        case 404:
        case 500:
        default:
      }
    } else if (error.message.includes('timeout')) {
      msg = '请求超时，请检查网络连接!';
    }
    let errResp: BaseResp = {
      code: 500,
      msg: msg === undefined ? '系统出了点问题' : msg,
      data: null
    }
    return Promise.reject(errResp);
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
      if (params && Object.keys(params).length > 0) {
        url += `?${qs.stringify(params)}`;
      }
      service.post(url, body)
      .then(res => {
        console.log(`请求接口: ${url}, body: ${JSON.stringify(body)}, \n返回: ${JSON.stringify(res)}`);
        resolve(res);
      })
      .catch(err => { 
        console.log(`请求接口: ${url}, \n返回: ${JSON.stringify(err)}`);       
        reject(err)
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
      service.get(url, {
        params: params
      })
      .then(res => {
        console.log(`请求接口: ${url}?${qs.stringify(params)}, \n返回: ${JSON.stringify(res)}`);
        resolve(res);
      })
      .catch(err => {
        console.log(`请求接口: ${url}?${qs.stringify(params)}, \n返回: ${JSON.stringify(err)}`);       
        reject(err)
      })
    });
  }

}

export default Network;