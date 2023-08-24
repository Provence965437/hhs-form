import request from "./request";

const api = {
    captchas(data) {
        return request({
            url: '/user/captcha',
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
    }
}

export default api;