import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL : 'http://152.136.185.210:7878/api/hy66',
    timeout : 0
  })

  instance.interceptors.request.use(config => {
    return config;
  })

  return instance(config)
}
