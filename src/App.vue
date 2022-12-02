<template>
  <div id="app" class="flex min-h-screen w-full">
    <NavBar></NavBar>
    <main class="flex min-h-screen flex-1 flex-col rounded-l-[48px]">
      <router-view/>
      <Footer></Footer>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar, Footer,
  },
});
</script>
