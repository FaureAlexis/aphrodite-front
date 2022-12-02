<template>
  <footer class="m-5">
    <div class="flex justify-around">
      <div class="flex flex-col mt-2 ">
        <span class="text-2xl font-extrabold text-transparent
          bg-clip-text bg-gradient-to-r to-primary from-hero_color">Aphrodite
        </span>
        <span>Un projet d'Hackathon, réalisé par </span>
        <a href="https://github.com/FaureAlexis" class="text-background_clear font-bold">Alexis Faure</a>
        <a href="https://github.com/aymteb" class="text-background_clear font-bold">Ayman Tebini</a>
        <a href="https://github.com/BraultNatheo" class="text-background_clear font-bold">Natheo Brault</a>
      </div>
      <div class="flex flex-col mt-2 ">
        <h4 class="text-2xl text-text font-bold">En savoir +</h4>
        <span>Le but d'Aphrodite est de sensibiliser les jeunes<br>
          (comme les - jeunes) aux risques liés<br>au VIH et autres ISTs</span>
      </div>
      <div class="flex flex-col mt-2 ">
        <h4 class="text-2xl text-text font-bold">Suivez Aphrodite</h4>
        <div class="flex justify-between mt-5">
          <a href="#"><fa class="text-background_clear text-4xl" icon="fa-brands fa-facebook">
          </fa></a>
          <a href="#"><fa class="text-background_clear text-4xl" icon="fa-brands fa-instagram">
          </fa></a>
          <a href="#"><fa class="text-background_clear text-4xl" icon="fa-brands fa-linkedin">
          </fa></a>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <span>Copyright 2022 Aphrodite. Tous droits réservés.</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style>

</style>
