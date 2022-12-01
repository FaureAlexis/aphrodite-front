/* eslint-disable spaced-comment */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faQuestion, faQuoteLeft, faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router/index';
import titleMixin from './mixins/titleMixin';
import store from './store/index';
import './assets/reset.css';

library.add(faHome, faQuestion, faQuoteLeft, faMessage);
createApp({
  extends: App,
  beforeCreate() { this.$store.commit('initialiseStore'); },
})
  .use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mixin(titleMixin)
  .mount('#app');
store.subscribe((mutation, state) => {
  localStorage.setItem('store-aphrodite', JSON.stringify(state));
});
