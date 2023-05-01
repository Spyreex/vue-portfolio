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

function rotateSlide(move) {
  if (props.slides.length > 1) {
    slider.currentSlide =
      (slider.currentSlide + move + props.slides.length) % props.slides.length;
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
  <div class="carousel-container">
    <div class="carousel">
      <div class="move move-left" @click="moveSlide(-1)">
        <i class="bx bxs-left-arrow"></i>
      </div>
      <div class="carousel-inner">
        <div class="carousel-items">
          <carousel-item
            v-for="(slide, index) in props.slides"
            :slide="slide"
            :key="`item-${index}`"
            :currentSlide="slider.currentSlide"
            :index="index"
            :total="props.slides.length"
          ></carousel-item>
        </div>
      </div>
      <div class="move move-right" @click="moveSlide(1)">
        <i class="bx bxs-right-arrow"></i>
      </div>
    </div>
    <carousel-indicators
      :currentIndex="slider.currentSlide"
      :total="props.slides.length"
      @switch="switchTo"
    >
    </carousel-indicators>
    <button class="pause-button" @click="togglePlay">
      <i class="bx bx-pause" v-if="slider.sliderInterval"></i>
      <i class="bx bx-play" v-else></i>
    </button>
  </div>
</template>

<style lang="scss">
button.pause-button {
  position: absolute;
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
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
}

div.carousel-container {
  display: flex;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  height: 80vh;
  width: 100%;
}
div.carousel {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 90%;
  width: 100%;

  div.move {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.5%;
    height: 80%;
    z-index: 3;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
    &.move-right {
      border-radius: 2rem 0 0 2rem;
    }
    &.move-left {
      border-radius: 0 2rem 2rem 0;
    }
    i {
      font-size: 3rem;
      -webkit-user-select: none;
      user-select: none;
    }
  }

  div.carousel-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    border-radius: 2rem;
    overflow: hidden;
    z-index: 2;
    border: 4px black solid;
    box-shadow: inset 0 0 2rem 0 rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.1);
    div.carousel-items {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
}

@media only screen and (max-width: 769px) {
  div.carousel {
    div.carousel-inner {
      width: 75%;
    }
    padding: 0;
    justify-content: space-between;
    div.move {
      width: 9%;
      height: 90%;
      i {
        font-size: 2rem;
      }
    }
  }
}

@media only screen and (max-width: 567px) {
  button.pause-button {
    padding: 0.25rem;
  }
}

@media only screen and (max-width: 320px) {
  button.pause-button {
    padding: 0rem;
    margin: 0.5rem;
  }
}
</style>
