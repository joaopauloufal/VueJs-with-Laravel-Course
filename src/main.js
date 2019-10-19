import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:8000';
Vue.http.headers.common['Authorization'] = 'Bearer Ke031z4rDq8sm8HzGxFHVDwiLGcEfuCM35TxvEAbqxahS8a42CSxpxZ4448dAlcl20aq7bGPLvTxgCli';

sync(store, router);


new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
