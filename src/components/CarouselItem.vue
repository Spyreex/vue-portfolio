<script setup>
import { defineProps } from "vue";

const props = defineProps({
  slide: String,
  currentSlide: Number,
  index: Number,
  total: Number,
});
</script>

<template>
  <Transition :name="`slide-in-${props.index}`">
    <div class="carousel-item" v-show="currentSlide === index">
      <img :src="props.slide" />
    </div>
  </Transition>
</template>

<style lang="scss">
div.carousel-item {
  // display: flex;
  // width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

@for $i from 0 through 4 {
  .slide-in-#{$i}-enter-active,
  .slide-in-#{$i}-leave-active {
    transition: all 1s ease-in-out;
  }
}
// circles!
// x^2 + y^2 = r^2
// on the circle are (n) amount of evenly distributed points, calculate the coordinates of the points

// .slide-in-0-enter-from {
//   transform: translateX(-100%);
// }

// .slide-in-1-enter-from {
//   transform: translateY(-100%);
// }

// .slide-in-2-enter-from {
//   transform: translateX(100%);
// }

// .slide-in-3-enter-from {
//   transform: translateY(100%);
// }

// .slide-in-0-leave-to {
//   transform: translateY(100%);
// }

// .slide-in-1-leave-to {
//   transform: translateX(-100%);
// }

// .slide-in-2-leave-to {
//   transform: translateY(-100%);
// }

// .slide-in-3-leave-to {
//   transform: translateX(100%);
// }

.slide-in-0-enter-from {
  transform: translate(-100%, 50%);
}

.slide-in-1-enter-from {
  transform: translate(-100%, -50%);
}

.slide-in-2-enter-from {
  transform: translate(20%, -100%);
}

.slide-in-3-enter-from {
  transform: translate(100%, 0);
}

.slide-in-4-enter-from {
  transform: translate(20%, 100%);
}

.slide-in-0-leave-to {
  transform: translate(100%, 50%);
}

.slide-in-1-leave-to {
  transform: translate(-20%, 100%);
}

.slide-in-2-leave-to {
  transform: translate(-100%, 0);
}

.slide-in-3-leave-to {
  transform: translate(-20%, -100%);
}

.slide-in-4-leave-to {
  transform: translate(100%, -50%);
}
</style>
