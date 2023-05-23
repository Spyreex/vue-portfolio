<script setup></script>

<template>
  <router-view />
</template>

<style lang="scss">
@use "sass:map";
@import "@/assets/sass/theme-colors.scss";

html,
body {
  width: 100%;
  height: 100vh;
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
    radial-gradient(
      at top center,
      rgba(255, 255, 255, 1) 0,
      rgba(0, 0, 0, 0.5) 100%
    );
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
p,
li {
  font-family: montserrat;
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
p,
li {
  color: white;
}
</style>
