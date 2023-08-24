import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

//import { createProxyMiddleware } from 'http-proxy-middleware'
const app = createApp(App)

app.use(router)
app.use(ElementPlus)


// app.use('/', createProxyMiddleware({
//     target: 'http://114.115.2.1',
//     changeOrigin: true,
//     pathRewrite: {
//         '^/': ''
//     }
// }))

app.mount('#app')