import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'

let loading: any

const startLoading = () => {
  interface Options {
    lock: boolean;
    text: string;
    background: string;
  }
  const options: Options = {
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  }
  loading = ElLoading.service(options)
}

const endLoading = () => {
  loading.close()
}

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  //默认请求带上相关参数 icode: 'C6A6C4086133360B'
  config.params = { ...config.params, icode: 'C6A6C4086133360B'}
  // 加载loading
  startLoading()
  return config
})

// 响应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {
  // 介绍loading
  endLoading()
  return response
}, error => {
  endLoading()
  // 错误提醒
  return Promise.reject(error)
})

export default axios
