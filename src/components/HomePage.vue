<script setup>
import CarouselBlock from "@/components/home/CarouselBlock.vue";
import HeaderBlock from "@/components/home/HeaderBlock.vue";

class Slide {
  constructor(url, link, external, title) {
    this.url = url;
    this.link = link;
    this.external = external;
    this.title = title;
  }
}

const slides = [
  new Slide(
    new URL(`@/assets/images/cv3.png`, import.meta.url).href,
    "cv",
    false,
    "Curriculum Vitae"
  ),
  new Slide(
    new URL(`@/assets/images/chickensweeper.png`, import.meta.url).href,
    "https://spyreex.github.io/chickensweeper/",
    true,
    "Chickensweeper (Minesweeper copy) in JS"
  ),
  new Slide(
    new URL(`@/assets/images/astar.png`, import.meta.url).href,
    "https://github.com/Spyreex/AStar",
    true,
    "A* Algorithm in C#"
  ),
  new Slide(
    new URL(`@/assets/images/solichicken.png`, import.meta.url).href,
    "https://spyreex.github.io/solichicken/",
    true,
    "Solichicken (Scuffed Solitaire) In JS"
  ),
];
</script>

<template>
  <HeaderBlock></HeaderBlock>
  <CarouselBlock :slides="slides"></CarouselBlock>
</template>

<style lang="scss" scoped>
@media only screen and (orientation: landscape) and (max-height: 320px) {
  body,
  html {
    font-size: 12px;
  }
}
</style>
