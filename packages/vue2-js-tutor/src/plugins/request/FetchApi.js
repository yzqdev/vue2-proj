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
let baseURL = envMap.get(nodeEnv.NODE_ENV);
let HttpMethodMap = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};

class FetchApi {
  constructor() {}
  static get(url) {
    return new Promise((resolve, reject) => {
      url = baseURL + url;
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      url = baseURL + url;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  static put(url, data) {
    return new Promise((resolve, reject) => {
      url = baseURL + url;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  static delete(url, data) {
    return new Promise((resolve, reject) => {
      url = baseURL + url;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve("删除成功"))
        .catch((err) => reject(err));
    });
  }
}
export default FetchApi;
