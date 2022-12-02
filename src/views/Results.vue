<template>
  <div id="view-result" class="min-h-screen flex justify-center items-center bg-background">
    <div class="flex flex-col">
      <span class="text-4xl font-extrabold text-transparent
        bg-clip-text bg-gradient-to-r to-primary from-purple-700">Aphrodite
      </span>
      <h2 class="text-2xl text-left text-text font-bold">Résultats</h2>
      <span class="text-xl text-primary">Score : {{score}}<br>
        {{showInfos()}}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Results',
  title: 'Résultats',
  data() {
    return {
      score: 0,
    };
  },
  mounted() {
    // eslint-disable-next-line radix
    this.score = parseInt(this.$route.params.score as string) as number;
  },
  methods: {
    showInfos() {
      if (this.score < 5) {
        return 'Pas pour cette fois ! Mais ne t\'inquiète pas, tu peux toujours retenter ta chance !';
      }
      if (this.score < 8) {
        return 'Pas mal ! Mais tu peux faire mieux !';
      }
      if (this.score < 10) {
        return 'Bravo ! Tu as réussi le quiz';
      }
      return '?';
    },
  },
});
</script>

<style>

</style>
