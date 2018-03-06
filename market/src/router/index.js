import Vue from 'vue'
import Router from 'vue-router'

// 引入 子组件页面
import home from '@/home/home.vue'
import login from '@/login/login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {name: 'home',path: '/',component: home}
    ,{name: 'login',path: '/login',component: login}
  ]
})
