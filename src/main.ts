/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
//import {  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

library.add();
createApp({
  extends: App,
  beforeCreate() { this.$store.commit('initialiseStore'); },
}).use(store).use(router).component('fa', FontAwesomeIcon)
  .mount('#app');
store.subscribe((mutation, state) => {
  localStorage.setItem('store-aphrodite', JSON.stringify(state));
});
