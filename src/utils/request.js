import axios from "axios";
// import store from '../store/index'
// import qs from "qs";
// import preference from './preference'

// 创建请求服务
const service = axios.create({
  baseURL: process.env.VUE_APP_RESTURL, // 请求根路径
  timeout: 5000, // 超时时间
  headers: { token: "" }
});

// 设置请求拦截器
service.interceptors.request.use(
  config => {
    // config.headers['token'] = preference.get_omsp_app_token()
    return config;
  },
  error => {
    // console.log(error)
    return Promise.reject(error);
  }
);

// 设置返回拦截器
service.interceptors.response.use(response => {
  return response.data;
  // const code = response.status;
  // if (code === 200) {
  // /* 后台数据处理出错*/
  // if (response.data.errors) {
  //   return Promise.reject(response.data.errors)
  // } else {
  //   return response.data
  // }
  // } else {
  //   return Promise.reject("请求失败，请检查网络");
  // }
});

// 默认请求配置
const requestOption = {
  url: "",
  method: "post",
  data: "",
  params: ""
};

function sendRequest(confirmParam) {
  // 将json格式转为form格式
  // confirmParam.data = qs.stringify(confirmParam.data)
  // 合并对象，覆盖默认配置
  const finalParam = { ...requestOption, ...confirmParam };
  // console.log(finalParam);
  // 开发环境和运行环境的请求路径不一样
  // finalParam.url = (requestOption.url + confirmParam.url)

  return service(finalParam);
}

export default {
  sendRequest
};
