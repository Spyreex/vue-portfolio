<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  grade: Number,
});
</script>

<template>
  <div class="quality">
    <div class="name">
      <p>{{ props.name }}</p>
    </div>
    <div class="grading">
      <div class="grade">
        <p>1</p>
      </div>
      <div class="blocks">
        <div class="filled" v-for="n in props.grade" :key="n"></div>
        <div class="unfilled" v-for="n in 10 - props.grade" :key="n"></div>
      </div>
      <div class="grade">
        <p>10</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.quality {
  display: flex;
  padding: 0.3rem;
  width: 100%;
  column-gap: 1rem;

  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.2);
  }
  p {
    margin: 0;
  }
  div.name {
    width: 30%;
  }
  div.grading {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 70%;
    div.grade {
      width: 5%;
      p {
        text-align: center;
      }
    }
    div.blocks {
      display: flex;
      width: 90%;
      border-radius: 0.5rem;
      overflow: hidden;

      > div {
        width: 10%;
        content: "";
        &.filled {
          background-color: rgba(0, 0, 0, 1);
        }
        &.unfilled {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  div.quality {
    flex-direction: column;
    row-gap: 0.2rem;
    div.name {
      width: 100%;
      p {
        text-align: center;
      }
    }
    div.grading {
      width: 100%;
    }
  }
}
</style>
