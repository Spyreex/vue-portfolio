<script setup>
import CarouselBlock from "@/components/home/CarouselBlock.vue";
import HeaderBlock from "@/components/home/HeaderBlock.vue";
// import ContentBlock from "./components/ContentBlock.vue";

class Slide {
  constructor(url, link) {
    this.url = url;
    this.link = link;
  }
}

const slides = [
  new Slide(
    new URL(`@/assets/images/chickensweeper.png`, import.meta.url).href,
    "cv"
  ),
  new Slide(
    new URL(`@/assets/images/chickensweeper.png`, import.meta.url).href,
    "cv"
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
