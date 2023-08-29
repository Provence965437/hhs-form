import request from "./request";

const api = {
    captchas(data) {
        return request({
            url: '/user/captcha',
            method: 'get',
            params: data,
        })
    },

    trycaptcha(data) {
        return request({
            url: '/user/trycaptcha',
            method: 'get',
            params: data,
        })
    },
    login(data) {
        return request({
            url: '/user/login',
            method: 'get',
            params: data,
        })
    },
    register(data) {
        return request({
            url: '/user/register',
            method: 'get',
            params: data
        })
    }
}

export default api;