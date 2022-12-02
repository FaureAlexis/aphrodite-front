<template>
  <div id="card-root" class="bg-background border-2 border-white rounded-10 p-3 shadow-xl
  min-h-200 bg-line">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
});
</script>

<style>

</style>
