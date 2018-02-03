import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import firebase from 'firebase';
import axios from 'axios';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuth: false,
    isLoading: false,
    users: [],
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
      }
    },
    updateAuth(state, isAuth) {
      this.replaceState(Object.assign(state, { isAuth }));
    },
    updateLoadingSpinner(state, isLoading) {
      this.replaceState(Object.assign(state, { isLoading }));
    },
    updateUsers(state, users) {
      this.replaceState(Object.assign(state, { users }));
    },
  },
  actions: {
    signIn({ commit }, user) {
      commit('updateLoadingSpinner', true);
      return firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((u) => {
          commit('updateAuth', true);
          commit('updateLoadingSpinner', false);
          router.replace('/');
        });
    },
    signOut({ commit }) {
      commit('updateLoadingSpinner', true);
      return firebase.auth()
        .signOut()
        .then(() => {
          commit('updateAuth', false);
          commit('updateLoadingSpinner', false);
        });
    },
    getUsers({ commit }) {
      commit('updateLoadingSpinner', true);
      return axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          return new Promise((resolve, reject) => {
            _.delay(() => {
              commit('updateUsers', response.data);
              commit('updateLoadingSpinner', false);
              resolve();
            }, 1000);
          });
        });
    },
  },
  getters: {}, // similar to computed props,
  modules: {},
});

store.subscribe((mutation, state) => localStorage.setItem('store', JSON.stringify(state)));

export default store;
