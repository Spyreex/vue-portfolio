<script setup>
import CarouselBlock from "@/components/CarouselBlock.vue";

const slides = [
  new URL(`@/assets/images/minesweeper.png`, import.meta.url).href,
  new URL(`@/assets/images/saga.png`, import.meta.url).href,
  new URL(`@/assets/images/ah-chocoladepasta-puur.jpg`, import.meta.url).href,
  new URL(`@/assets/images/minesweeper2.png`, import.meta.url).href,
  new URL("@/assets/images/saga.png", import.meta.url).href,
];
</script>

<template>
  <CarouselBlock :slides="slides"></CarouselBlock>
  <h1>arbge</h1>
</template>

<style lang="scss"></style>
