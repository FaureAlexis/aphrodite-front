import store from '@/store/index';

declare module '@vue/runtime-core' {
  // Declare store.
  interface ComponentCustomProperties {
    $store: store;
  }
}
