import Vue from 'vue';
import App from '@/views/App.vue';
import store from '@/store';
import router from '@/router';
import firebase from 'firebase';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDU4XzyD0cmrkl4ikAR9vQ39Tg-OdzRLf0',
  authDomain: 'spa-api.firebaseapp.com',
  databaseURL: 'https://spa-api.firebaseio.com',
  projectId: 'spa-api',
  storageBucket: '',
  messagingSenderId: '165743967428',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
  created() {
    this.$store.dispatch('getUsers');
  },
}).$mount('#app');
