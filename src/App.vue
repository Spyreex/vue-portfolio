<script setup>
import CarouselBlock from "@/components/CarouselBlock.vue";
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
    "chickensweeper"
  ),
  new Slide(new URL(`@/assets/images/saga.png`, import.meta.url).href, "saga"),
  new Slide(new URL(`@/assets/images/saga.png`, import.meta.url).href, "saga"),
  new Slide(new URL(`@/assets/images/saga.png`, import.meta.url).href, "saga"),
  new Slide(new URL(`@/assets/images/saga.png`, import.meta.url).href, "saga"),
];
</script>

<template>
  <div class="header">
    <div class="title">
      <h1>Daniël Phoeng</h1>
      <p>Welcome to my site!</p>
    </div>
  </div>
  <CarouselBlock :slides="slides"></CarouselBlock>
  <!-- <ContentBlock :slides="slides"> </ContentBlock> -->
</template>

<style lang="scss">
@use "sass:map";
@import "@/assets/sass/theme-colors.scss";

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  // background-image: linear-gradient(
  //     217deg,
  //     rgba(255, 0, 0, 0.8),
  //     rgba(255, 0, 0, 0) 70.71%
  //   ),
  //   linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
  //   linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  // #71c5f3, #15c5e2, #56a8ff
  background-image: linear-gradient(to bottom, #71c5f3, #15c5e2, #459af4),
    radial-gradient(at top center, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.5));
  background-blend-mode: multiply, multiply;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: spacegrotesk;
}

label,
p {
  font-family: montserrat;
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
p {
  color: white;
}

div.header {
  display: flex;
  height: 20vh;
  justify-content: center;

  div.title {
    padding: 0.5rem 0 2rem 0;
    // background-color: rgba(255, 255, 255, 0.1);
    // backdrop-filter: blur(10px) saturate(10%);
    // backdrop-filter: invert(80%) saturate(50%);
    // box-shadow: 0 0 10rem 5rem rgba(255, 255, 255, 0.5);
    h1 {
      font-size: 4rem;
      padding: 1rem;
      margin: 0;
      // background-color: rgba(255, 255, 255, 0.25);
      text-align: center;
    }
    p {
      font-size: 2rem;
      margin: 0;
      text-align: center;
    }
  }
}
</style>
