<script setup>
import { defineProps } from "vue";

const props = defineProps({
  slide: String,
  currentSlide: Number,
  index: Number,
  total: Number,
});

function link() {
  console.log("ss");
}
</script>

<template>
  <Transition :name="`slide-in-${props.total}-${props.index}`">
    <div class="carousel-item" v-show="currentSlide === index">
      <img :src="props.slide" @click="link" />
    </div>
  </Transition>
</template>

<style lang="scss">
@use "sass:math";

div.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}

// starting position of the carousel
$start: 0.5;

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
        (100 / $multiply) * $fromX * 1%,
        (100 / $multiply) * $fromY * 1%
      );
    }

    $multiply: math.max(math.abs($toX), math.abs($toY));
    .slide-in-#{$tot}-#{$a - 1}-leave-to {
      transform: translate(
        (100 / $multiply) * $toX * 1%,
        (100 / $multiply) * $toY * 1%
      );
    }
  }
}
</style>
