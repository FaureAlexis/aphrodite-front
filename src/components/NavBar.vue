<template>
  <aside class="flex w-64 flex-col px-4 pt-10 pb-6 font-sans"
    :class="{ 'navbar--hidden w-1': !showNavbar, 'navbar': showNavbar }">
      <router-link class="flex flex-col items-center gap-x-4 text-2xl font-medium
      text-white focus:outline-none sticky" to="/">
        <img class="h-8 w-8 mr-2" src="@/assets/logo.png" alt="logo" />
        <span class="mt-2 font-extrabold text-transparent
        bg-clip-text bg-gradient-to-r to-primary from-background_clear">Aphrodite
        </span>
      </router-link>
      <ul class="sticky flex flex-1 flex-col gap-y-10 px-8 pt-14">
        <li v-for="(nav, key) in navigation" v-bind:key="key">
          <router-link :to="nav.to" class="flex items-center gap-x-4 text-text hover:font-medium
          hover:text-primary focus:font-medium focus:text-primary">
            <fa :icon="nav.icon" class="h-6 w-6 stroke-current"></fa>
            <span>{{nav.name}}</span>
          </router-link>
        </li>
      </ul>
    <div class="sticky bottom-4 rounded-10 bg-line
    bg-background bg-top p-6">
      <div class="text-text">Rejoignez notre <span class="font-bold">Newsletter</span></div>
      <div class="mt-3 text-sm text-gray-700">Restez informés.</div>
      <button type="button" class="mt-4 w-full rounded-lg
      bg-background_clear py-2 text-sm font-normal text-gray-primary
      hover:text-primary">Je m'inscris</button>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const navigation = [
  {
    name: 'Accueil',
    icon: 'home',
    to: '/',
  },
  {
    name: 'Quiz',
    icon: 'question',
    to: '/quiz',
  },
  {
    name: 'À propos',
    icon: 'quote-left',
    to: '/about',
  },
  {
    name: 'Contact',
    icon: 'message',
    to: '/contact',
  },
];
export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      navigation,
      showNavbar: true,
      lastScroll: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - this.lastScroll) < 50) {
        return;
      }
      if (currentScroll > this.lastScroll) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
      this.lastScroll = currentScroll;
    },
  },
});
</script>

<style scoped>
.navbar {
  transition: width 1s ease;
}

.navbar--hidden {
  width: 0;
  transform:translate(-9999px);
  transition: all .5s linear;
}
</style>
