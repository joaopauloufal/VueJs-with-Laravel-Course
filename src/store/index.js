import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import bank from './modules/bank'
import pagination from './modules/pagination'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account: account,
    bank: bank,
    pagination: pagination
  }
})
