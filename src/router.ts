import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';
import SignOut from '@/views/SignOut.vue';
import Grid from '@/views/Grid.vue';
import firebase from 'firebase';
import store from '@/store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        // async op before loading component
        firebase.auth().onAuthStateChanged((user) => {
          store.commit('updateAuth', !!user);
          if (!user) { next('/sign-in'); } else { next(); }
        });
      },
      meta: { requiresAuth: true }, // hold metadata
    }, {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn,
    }, {
      path: '/sign-out',
      name: 'signOut',
      component: SignOut,
    }, {
      path: '/grid',
      name: 'grid',
      component: Grid,
    }, { // catch-all
      path: '*',
      redirect: '/sign-in',
    },
  ],
});
