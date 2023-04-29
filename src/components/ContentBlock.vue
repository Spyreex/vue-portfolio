<script setup>
import { defineProps } from "vue";
const props = defineProps({
  slides: Array,
});
</script>

<template>
  <div class="content-block">
    <section :id="props.slides[0].link">
      <div class="chickensweeper"><h2>cghickebncskeper</h2></div>
    </section>
    <section :id="props.slides[1].link">
      <div class="saga"><h2>saga</h2></div>
    </section>
  </div>
</template>

<style lang="scss">
@use "sass:map";
@import "@/assets/sass/theme-colors.scss";

div.content-block {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  padding: 1rem;
  row-gap: 1rem;
  // justify-content: center;
  width: 70%;
  border-radius: 2rem;
  background-color: map.get($theme-colors, "main");
}

div.saga,
div.chickensweeper {
  height: 100vh;
  background-color: map.get($theme-colors, "sub");
  border-radius: 1.5rem;
  h2 {
    padding: 1rem;
    margin: 0;
  }
}
</style>
