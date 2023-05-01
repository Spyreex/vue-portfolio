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
    "cv"
  ),
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
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
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
  padding: 1rem;

  div.title {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: 75%;
    h1 {
      font-size: 4rem;
      line-height: 4rem;
      margin: 0;
      text-align: center;
    }
    p {
      font-size: 2rem;
      margin: 0;
      text-align: center;
    }
  }
}

@media only screen and (max-width: 620px) {
  div.header {
    div.title {
      h1 {
        font-size: 3rem;
        line-height: 3rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
}

@media only screen and (max-width: 481px) {
  div.header {
    div.title {
      h1 {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
  }
}

@media only screen and (max-width: 320px) {
  div.header {
    div.title {
      h1 {
        font-size: 2rem;
        line-height: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
}

@media only screen and (orientation: landscape) and (max-height: 600px) {
  div.header {
    padding: 0;
    div.title {
      h1 {
        line-height: 4rem;
      }
      p {
        display: none;
      }
    }
  }
}
@media only screen and (orientation: landscape) and (max-height: 320px) {
  body,
  html {
    font-size: 12px;
  }
}
</style>
