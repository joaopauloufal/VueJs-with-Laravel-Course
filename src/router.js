import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AccountsList from './views/Accounts/List.vue'
import AccountsView from './views/Accounts/View.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/contas',
      name: 'accounts',
      component: AccountsList
    },

    {
      path: '/contas/:id',
      name: 'accounts',
      component: AccountsView
    },

  ]
})
