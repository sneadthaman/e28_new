import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomePage from '@/components/pages/HomePage.vue';
import HolidaysPage from '@/components/pages/2021HolidaysPage.vue';
import AddHolidayPage from '@/components/pages/AddHolidayPage.vue';


const router = new VueRouter({
  routes: [
      { path: '/', component: HomePage },
      { path: '/2021holidays', component: HolidaysPage },
      { path: '/add-holiday', component: AddHolidayPage },
  ],
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
