import Vue from 'vue';
import iView from 'iview';
import '@/assets/style/reset.less';
import 'iview/dist/styles/iview.css';
import router from './router';
import store from './store';
import App from './App.vue';


Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
