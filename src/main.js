import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import LoginInterceptor from '@/interceptors.js'

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8000';

LoginInterceptor.check_empty_token(router)
LoginInterceptor.check_auth()


sync(store, router);


new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
