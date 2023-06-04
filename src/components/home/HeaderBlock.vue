<script setup></script>

<template>
  <div class="header">
    <div class="title">
      <h1>Daniël Phoeng</h1>
      <p>Click on the slides for more info</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.header {
  display: flex;
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
</style>
