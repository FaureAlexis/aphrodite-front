<template>
  <aside class="flex w-64 flex-col px-4 pt-10 pb-6 font-sans">
    <router-link class="flex flex-col items-center gap-x-4 text-2xl font-medium
    text-white focus:outline-none" to="/">
      <img class="h-8 w-8 mr-2" src="@/assets/logo.png" alt="logo" />
      <span class="mt-2 font-extrabold text-transparent
      bg-clip-text bg-gradient-to-r to-primary from-background_clear">Aphrodite

      </span>
    </router-link>
    <ul class="flex flex-1 flex-col gap-y-10 px-8 pt-14">
      <li v-for="(nav, key) in navigation" v-bind:key="key">
        <router-link :to="nav.to" class="flex items-center gap-x-4 text-text hover:font-medium
        hover:text-primary focus:font-medium focus:text-primary">
          <fa :icon="nav.icon" class="h-6 w-6 stroke-current"></fa>
          <span>{{nav.name}}</span>
        </router-link>
      </li>
    </ul>
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
    };
  },
});
</script>
