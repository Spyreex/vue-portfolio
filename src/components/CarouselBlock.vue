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
  clearInterval(slider.slideInterval);
});

function startSlideTimer() {
  slider.slideInterval = setInterval(() => {
    slider.currentSlide =
      slider.currentSlide < props.slides.length - 1
        ? slider.currentSlide + 1
        : 0;
  }, 3000);
}

function stopSlideTimer() {
  clearInterval(slider.slideInterval);
}

function switchTo(index) {
  slider.currentSlide = index;
  stopSlideTimer();
  startSlideTimer();
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

div.carousel {
  div.carousel-inner {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
}
</style>
