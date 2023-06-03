<script setup>
import { defineProps } from "vue";

const props = defineProps({
  slide: Object,
  currentSlide: Number,
  index: Number,
  total: Number,
});
</script>

<template>
  <Transition :name="`slide-in-${props.total}-${props.index}`">
    <div class="carousel-item" v-show="currentSlide === index">
      <!-- <router-link :to="`/${props.slide.link}`" target="_blank"> -->
      <router-link v-if="!props.slide.external" :to="`/${props.slide.link}`">
        <!-- <img class="border" src="@/assets/images/fotoborder.png" alt="" /> -->
        <img class="main-image" :src="props.slide.url" />
        <h3 v-if="props.slide.title">{{ props.slide.title }}</h3>
      </router-link>
      <a v-else :href="props.slide.link">
        <img class="main-image" :src="props.slide.url" />
        <h3 v-if="props.slide.title">{{ props.slide.title }}</h3>
      </a>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@use "sass:math";

div.carousel-item {
  position: absolute;
  margin: 2rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img.border {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    -webkit-user-select: none;
    user-select: none;
  }
  img.main-image {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
    outline: 1px black solid;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 2rem;
    z-index: 1;
    border: 4px solid black;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 1);
  }
  h3 {
    position: absolute;
    font-size: 150%;
    left: 0;
    bottom: 0;
    padding: 2rem;
    z-index: 3;
    margin: 0;
  }
}

@media only screen and (max-width: 769px) {
  div.carousel-item {
    margin: 1rem;
  }
}

@media only screen and (max-width: 567px) {
  div.carousel-item {
    margin: -4px;
  }
}

@media only screen and (max-width: 481px) {
  div.carousel-item {
    img.border {
      display: none;
    }
  }
}

// starting position of the carousel
$start: 0.5;

// distance between the individual slides; 100 means it will be directly attached to the next slide
$distance: 110;

// $tot for slide count, $j for current slider (min: 2, max: 20)
@for $tot from 2 through 20 {
  $coordX: [];
  $coordY: [];

  // calculate coordinates for where the slides should be on the circle
  @for $k from 0 through $tot - 1 {
    $coordX: append(
      $coordX,
      math.cos((2 * math.$pi) / $tot * ($k + 1) + ($start * math.$pi))
    );
    $coordY: append(
      $coordY,
      math.sin((2 * math.$pi) / $tot * ($k + 1) + ($start * math.$pi))
    );
  }

  // calculate where the previous and next slide are relative to the current slide
  @for $a from 1 through $tot {
    $fromX: nth($coordX, ($a - 2) % $tot + 1) - nth($coordX, $a);
    $fromY: nth($coordY, ($a - 2) % $tot + 1) - nth($coordY, $a);
    $toX: nth($coordX, $a % $tot + 1) - nth($coordX, $a);
    $toY: nth($coordY, $a % $tot + 1) - nth($coordY, $a);

    .slide-in-#{$tot}-#{$a - 1}-enter-active,
    .slide-in-#{$tot}-#{$a - 1}-leave-active {
      transition: all 1s ease-in-out;
    }

    // multiply is used so the slides are always at least 100% (x or y) from the previous or next away so it always starts off screen
    $multiply: math.max(math.abs($fromX), math.abs($fromY));
    .slide-in-#{$tot}-#{$a - 1}-enter-from {
      transform: translate(
        ($distance / $multiply) * $fromX * 1%,
        ($distance / $multiply) * $fromY * 1%
      );
    }

    $multiply: math.max(math.abs($toX), math.abs($toY));
    .slide-in-#{$tot}-#{$a - 1}-leave-to {
      transform: translate(
        ($distance / $multiply) * $toX * 1%,
        ($distance / $multiply) * $toY * 1%
      );
    }
  }
}
</style>
