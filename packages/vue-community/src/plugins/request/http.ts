import axios from "axios";


// 环境的切换

axios.defaults.baseURL =  '/api';

axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.defaults.timeout = 15000;
// 请求操作



export default axios;
