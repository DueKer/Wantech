// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*组件*/
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import App from './App'
import axios from 'axios'

/*css*/

import "../static/css/libs/ui-reset.css";
import "../static/css/main.css";
import "../static/css/libs/sm.css";


import store from './store/'

Vue.config.productionTip = false
Vue.use(MintUI);
/*axios.defaults.withCredentials=true;*/
Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

