// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import $ from 'jquery'
import VueLazyload from 'vue-lazyload'  // 引入懒加载插件

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: 'static/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
