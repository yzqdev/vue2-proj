import axios from "axios";
import qs from "qs";
// import { Message } from "element-ui";
//
// const errorMessage = msg => {
//   Message({
//     showClose: true,
//     message: msg,
//     type: "error",
//     center: true
//   });
// };
// 环境的切换
const nodeEnv = process.env;

let envMap = new Map([
  ["development", "https://www.vue-js.com/api/v1"],
  ["test", "https://tdoctor.dedvl.com/"],
  ["production", "https://www.vue-js.com/api/v1"],
]);
axios.defaults.baseURL = envMap.get(nodeEnv.NODE_ENV);

// let url = 'http://192.168.1.81:8098/';
// let url = 'http://111.231.58.249:8098';
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.defaults.timeout = 15000;
// 请求操作
axios.interceptors.request.use(
  (config) => {
    // 这里的config包含每次请求的内容
    // 判断token
    // if (store.state.token.length || localStorage.getItem("token")) {
    //   if (!store.state.token.length) {
    //     config.headers.Authorization = localStorage.getItem("token");
    //   } else {
    //     config.headers.Authorization = `${store.state.token}`;
    //   }
    // }
    config.headers.Authorization =
      "cy7muEesH/I+7eG9TPV2gh+vZSykIADlFmBPXYoDQSGhuvvzc08IqHpBR5VzDqrnLu3kg2HY8EA2z8aAGOuFKAUOceGLTrQLDfBHNAEJu4PHatoxPT/0d5WE/jxXBX0XfePUf5bTXvdShSY45r1n7jYGzxA9j2AVHUGThyFXohN4T/J9gXgdHn1z5UbpxwdCu9O27JCzJnk5MHRPizO+xsrcbQP+xYaz/JWPTC7iRu8=";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//响应的拦截
axios.interceptors.response.use(
  (response) => {
    console.log("userSuccess");
    // if (response.data.status && response.data.status === "SUCCESS") {
    //   return Promise.resolve(response);
    // } else {
    //
    //   return Promise.reject(response);
    // }
  },
  (err) => {
    // if (error.response.status) {
    if (err && err.response) {
      let errorItem = err.response.status;
      let info = new Map([
        [400, "请求错误(400)"],
        [403, "登录过期，请重新登录"],
        [404, `请求出错(404)`],
        [408, "请求超时(408)"],
        [500, "服务器错误(500)"],
        [502, "网络错误(502)"],
        [503, "服务不可用(503)"],
        [504, "网络超时(504)"],
        [505, "HTTP版本不受支持(505)"],
        ["default", `连接出错(${err.response.status})!`],
      ]);
      // errorMessage(info.get(errorItem));

      //
      // switch (err.response.status) {
      if (errorItem === 401) {
        // location.assign('/dist/#/login')
        let msg = err.response.data.messageList[0].value || "请重新登录";
        // errorMessage(msg);
      }

      return Promise.reject(err.response);
    }
  }
);
class http extends axios {
  constructor() {
    super();
  }

  /**
   * axios post 请求封装
   * @param {*} url 接口地址
   * @param {*} params 接口参数？可选 { type:object }
   * @param {*} isShow 接口请求前是否展示loading
   */
  static async postQuery(url, params) {
    return await axios.post(url, qs.stringify(params));
  }

  /**
   * axios post 请求封装
   * @param {*} url 接口地址
   * @param {*} params 接口参数？可选 { type:object }
   * @param {*} isShow 接口请求前是否展示loading
   */
  static async postBody(url, params) {
    return await axios.post(url, params);
  }
  /**
   * axios post 请求封装
   * @param {*} url 接口地址
   * @param {*} params 接口参数？可选 { type:object }
   * @param {*} isShow 接口请求前是否展示loading
   */
  static async postForm(url, params) {
    return await axios.post(url, params, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
}
export default http;
