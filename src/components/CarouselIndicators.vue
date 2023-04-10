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

<style lang="scss">
div.carousel-indicators {
  position: absolute;
  bottom: 1.5rem;
  transform: translateX(-50%);
  left: 50%;
  z-index: 2;

  button.carousel-button {
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background-color: black;
    margin: 0.3rem;
    opacity: 0.25;
    border-radius: 50%;

    cursor: pointer;
    &.active {
      background-color: white;
      opacity: 0.75;
    }
  }
}
</style>
