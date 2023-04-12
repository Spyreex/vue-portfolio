<script setup>
import CarouselBlock from "@/components/CarouselBlock.vue";

const slides = [
  new URL(`@/assets/images/chickensweeper.png`, import.meta.url).href,
  new URL(`@/assets/images/saga.png`, import.meta.url).href,
  new URL(`@/assets/images/saga.png`, import.meta.url).href,
  new URL(`@/assets/images/saga.png`, import.meta.url).href,
];

const defaultImage = new URL(`@/assets/images/black.png`, import.meta.url).href;
</script>

<template>
  <CarouselBlock :slides="slides" :default="defaultImage"></CarouselBlock>
  <h1>arbge</h1>
</template>

<style lang="scss"></style>
