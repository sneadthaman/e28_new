import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from '@/common/router.js';
import store from '@/common/store.js'; 

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
