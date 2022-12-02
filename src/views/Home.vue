<template>
  <div class="home bg-hero bg-cover bg-no-repeat bg-hero_color min-h-full flex flex-col">
    <div class="ml-auto mr-24 mt-64">
      <h3 class="text-right">
        <span class="mt-2 text-2xl font-extrabold text-transparent
        bg-clip-text bg-gradient-to-r to-primary from-purple-600">Aphrodite
        </span>
      </h3>
      <h1 class="text-right text-6xl mt-4 font-bold text-text">
        Coit Anal</h1>
      <h4 class="text-right w-96 text-text mt-4 mb-4">
        <span>Lorem ipsum sucemaququete jaiunegrande bite yo lo patalo eskizo nique
          la mere a laurent bouno</span>
      </h4>
      <div class="flex mt-4">
        <button type="button" class="ml-auto bg-primary text-white p-4 rounded-10
        hover:opacity-60" @click="showMore()">
          JE M'INFORME</button>
      </div>
    </div>
    <div class="mr-auto ml-24 mt-64 w-96" id="more">
      <img class="h-96 w-96" src="@/assets/logo.png" alt="logo" />
      <Card>
        <h2>Dépistage près de chez vous !</h2>
      </Card>
    </div>
    <div class="ml-auto mr-48 mt-14 w-96">
      <Card>
        <h2>Dépistage près de chez vous !</h2>
      </Card>
    </div>
    <div class="mr-auto ml-24 w-96">
      <Card>
        <h2>Dépistage près de chez vous !</h2>
      </Card>
    </div>
    <transition name="fade">
    <div id="pagetop" class="fixed right-5 bottom-5 bg-background hover:cursor-pointer
    rounded-full"
    v-show="(lastScroll > 80)" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
          stroke="#4a5568"
          stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'Home',
  title: 'Aphrodite - Accueil',
  data() {
    return {
      lastScroll: 0,
    };
  },
  components: {
    Card,
  },
  methods: {
    handleScroll() {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - this.lastScroll) < 50) {
        return;
      }
      this.lastScroll = currentScroll;
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    showMore() {
      const more = document.getElementById('more');
      if (more) {
        more.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped>
.home {
  min-height: 250vh;
}
</style>
