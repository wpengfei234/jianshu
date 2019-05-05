// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.prototype.$http = axios

//清除默认样式
import '@/assets/stylus/reset.styl'
//引入字体图标样式
import './assets/stylus/icon.css'

//import './assets/css/iconfont.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
