import { createRouter, createWebHistory, useRouter} from 'vue-router'
import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/myself',
      name: 'myself',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Myself.vue'),
      children: [
        {
          path: 'baseinfo', component: ()=>import('../components/myself/BaseInfo.vue'),
          name: 'mybaseinfo'
        },
        {
          path: 'star', component: ()=>import('../components/myself/Mystar.vue'),
          name: 'mystar'
        },
        {
          path: 'updown', component: ()=>import('../components/myself/MyUpDown.vue'),
          name: 'myupdown'
        }
      ]
    },
    {
      path: '/404',
      name: '404',
       component: ()=>import('../views/404.vue')
    },
    {
      path: '/:catchAll(.*)',//匹配未定义的路由
      redirect: '/404'//重定向
    }
  ]
})

//permission
const BlackList = ['myself','mybaseinfo','mystar', 'myupdown']

router.beforeEach((to, from, next) => {
  console.log('123',to.name, from.name)
  if(BlackList.includes(to.name)){
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo)
    if(userInfo.isLogin){
      next()
    }
    next({
      path: '/',
    })
  }else{
    next()
  }
})
export default router
