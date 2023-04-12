<script setup>
import CarouselItem from "./CarouselItem.vue";
import CarouselIndicators from "./CarouselIndicators.vue";
import { defineProps, onMounted, onBeforeUnmount, reactive } from "vue";

const props = defineProps({
  slides: Array,
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

function startSlideTimer() {
  slider.sliderInterval = setInterval(() => {
    slider.currentSlide =
      slider.currentSlide < props.slides.length - 1
        ? slider.currentSlide + 1
        : 0;
  }, 3000);
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
  </div>
  <button class="pause-button" @click="togglePlay">
    <i class="bx bx-pause" v-if="slider.sliderInterval"></i>
    <i class="bx bx-play" v-else></i>
  </button>
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
  cursor: pointer;
}

div.carousel {
  div.carousel-inner {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
}
</style>
