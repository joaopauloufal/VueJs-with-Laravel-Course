import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

sync(store, router);


new Vue({
  router,
  store,
  Vuex,
  VueResource,
  render: h => h(App)
}).$mount('#app')
