import Vue from 'vue'
import router from './router'
// 引入
import Resource from 'vue-resource'
Vue.use(Resource)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data(){
    return{}
  },
  router
})
