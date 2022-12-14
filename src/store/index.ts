import { createStore } from 'vuex';

export default createStore({
  state: {
    BaseUrl: 'https://aphrodite-back.vercel.app',
    isConnected: false,
  },
  mutations: {
    initStore(state) {
      if (localStorage.getItem('store-aphrodite')) {
        this.replaceState(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          Object.assign(state, JSON.parse(localStorage.getItem('store-aphrodite')! as string)),
        );
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
