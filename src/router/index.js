import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Detail from '@/page/detail/detail'
//const detail = resolve => require(['@/page/detail/detail', resolve]);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/detail',
      name: 'detail',
      component: Detail
    },{
      path: '',
      redirect: '/index',
      component: Index
    }
  ]
})
