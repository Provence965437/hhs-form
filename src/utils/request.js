import axios from 'axios';

// 创建 request axios 实例
const request = axios.create({
    method: 'post',
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5173/',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // "userId": sessionStorage.getItem('user_id')||'100000'
        // 'X-Requested-With': 'XMLHttpRequest',
    },
    timeout: 30000, // 请求超时时间
})

// request拦截器,在请求之前做一些处理
request.interceptors.request.use(
    config => {

        console.log(config.withCredentials)
            // config.headers.common['SessionID'] = window.localStorage.getItem('SessionID') || ''; //携带SessionID
        console.log('请求拦截成功')
        console.log(config)
        return config;
    },
    error => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

//配置成功后的拦截器
request.interceptors.response.use(res => {
    console.log(res)
    if (res.status == 200) {

        return res.data
    } else {
        return Promise.reject(res.data.msg);
    }
}, error => {
    if (error.response.status) {
        switch (error.response.status) {
            case 401:
                break;
            default:
                break;
        }
    }
    return Promise.reject(error)
})

//request.defaults.withCredentials = true;


export default request