import Vue from 'vue';
import Router from 'vue-router';
import Frame from '@/components/Frame.vue';
import Login from './views/Login.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/main',
      name: 'main',
      component: Frame,
      children: [
        {
          path: 'home',
          meta: {
            title: '供应商列表',
          },
          component: () => import(/* webpackChunkName: "main/home" */ './views/Home.vue'),
        },

      ],
    },
  ],
});
