<script setup>
import CarouselItem from "./CarouselItem.vue";
import CarouselIndicators from "./CarouselIndicators.vue";
import { defineProps, onMounted, onBeforeUnmount, reactive } from "vue";

const props = defineProps({
  slides: Array,
  default: String,
});

const slider = reactive({
  currentSlide: 0,
  sliderInterval: null,
});

onMounted(() => {
  startSlideTimer();
});

onBeforeUnmount(() => {
  clearInterval(slider.sliderInterval);
});

function rotateSlide(move) {
  if (props.slides.length > 1) {
    slider.currentSlide =
      (slider.currentSlide + move + props.slides.length) % props.slides.length;
    console.log(`${slider.currentSlide} ${move} ${props.slides.length}`);
  }
}

function startSlideTimer() {
  slider.sliderInterval = setInterval(() => {
    rotateSlide(1);
  }, 4000);
}

function stopSlideTimer() {
  clearInterval(slider.sliderInterval);
  slider.sliderInterval = null;
}

function switchTo(index) {
  slider.currentSlide = index;
  if (slider.sliderInterval) {
    stopSlideTimer();
    startSlideTimer();
  }
}

function togglePlay() {
  if (slider.sliderInterval) {
    stopSlideTimer();
  } else {
    startSlideTimer();
  }
}

function moveSlide(move) {
  rotateSlide(move);
  if (slider.sliderInterval) {
    stopSlideTimer();
    startSlideTimer();
  }
}
</script>

<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item
        v-for="(slide, index) in props.slides"
        :slide="slide"
        :key="`item-${index}`"
        :currentSlide="slider.currentSlide"
        :index="index"
        :total="props.slides.length"
      ></carousel-item>
      <carousel-indicators
        :currentIndex="slider.currentSlide"
        :total="props.slides.length"
        @switch="switchTo"
      >
      </carousel-indicators>
    </div>
    <div class="bg-image"><img :src="props.default" /></div>
    <div class="move move-left" @click="moveSlide(-1)"><p>&lt;</p></div>
    <div class="move move-right" @click="moveSlide(1)"><p>></p></div>
    <button class="pause-button" @click="togglePlay">
      <i class="bx bx-pause" v-if="slider.sliderInterval"></i>
      <i class="bx bx-play" v-else></i>
    </button>
  </div>
</template>

<style lang="scss">
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

button.pause-button {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 2rem;
  padding: 0.5rem;
  margin: 1rem;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
}

div.carousel {
  position: relative;

  div.move {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    width: 15%;
    height: 80%;
    z-index: 3;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      p {
        display: block;
      }
    }
    &.move-right {
      right: 0;
    }
    p {
      display: none;
      font-size: 3rem;
      -webkit-user-select: none;
      user-select: none;
    }
  }

  div.bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    -webkit-user-select: none;
    user-select: none;
    img {
      width: 100%;
      height: 100%;
      -webkit-user-select: none;
      user-select: none;
    }
  }

  div.carousel-inner {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 2;
  }
}
</style>
