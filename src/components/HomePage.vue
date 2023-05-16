<script setup>
import CarouselBlock from "@/components/home/CarouselBlock.vue";
import HeaderBlock from "@/components/home/HeaderBlock.vue";
// import ContentBlock from "./components/ContentBlock.vue";

class Slide {
  constructor(url, link, title) {
    this.url = url;
    this.link = link;
    this.title = title;
  }
}

const slides = [
  new Slide(
    new URL(`@/assets/images/chickensweeper.png`, import.meta.url).href,
    "cv",
    "Chickensweeper (Minesweeper copy) in JS"
  ),
  new Slide(
    new URL(`@/assets/images/astar.png`, import.meta.url).href,
    "cv",
    "A* Algorithm in C#"
  ),
  new Slide(
    new URL(`@/assets/images/solichicken.png`, import.meta.url).href,
    "cv",
    "Solichicken (Scuffed Solitaire) In JS"
  ),
];
</script>

<template>
  <HeaderBlock></HeaderBlock>
  <CarouselBlock :slides="slides"></CarouselBlock>
  <!-- <ContentBlock :slides="slides"> </ContentBlock> -->
</template>

<style lang="scss" scoped>
@media only screen and (orientation: landscape) and (max-height: 320px) {
  body,
  html {
    font-size: 12px;
  }
}
</style>
