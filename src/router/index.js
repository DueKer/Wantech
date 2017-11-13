import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	hashbang: false,
	history: true,
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/test.vue'], resolve)
    }
  ]
})
