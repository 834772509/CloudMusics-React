import axios from "axios";

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    // baseURL: "https://musicapi.leanapp.cn",
    baseURL: "http://123.207.32.32:9001",
    timeout: 5000,
  });

  //发送网络请求
  return instance(config);
}
