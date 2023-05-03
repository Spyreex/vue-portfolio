<script setup>
import { defineProps } from "vue";

const props = defineProps({
  total: Number,
  currentIndex: Number,
});
</script>

<template>
  <div class="carousel-indicators">
    <button
      class="carousel-button"
      :class="{ active: props.currentIndex === index - 1 }"
      v-for="index in props.total"
      :key="index - 1"
      @click="$emit('switch', index - 1)"
    ></button>
  </div>
</template>

<style lang="scss" scoped>
div.carousel-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  column-gap: 0.3rem;
  z-index: 3;

  button.carousel-button {
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background-color: black;
    opacity: 0.25;
    border-radius: 50%;

    cursor: pointer;
    &.active {
      background-color: white;
      opacity: 0.75;
    }
  }
}
@media only screen and (max-width: 769px) {
  div.carousel-indicators {
    column-gap: 0.5rem;
  }
}
@media only screen and (max-width: 567px) {
  div.carousel-indicators {
    column-gap: 0.75rem;
  }
}
</style>
