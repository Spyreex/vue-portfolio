<script setup></script>

<template>
  <router-view />
</template>

<style lang="scss">
@use "sass:map";
@import "@/assets/sass/theme-colors.scss";

#app {
  height: 100%;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  height: 100%;
  font-size: 16px;
}

body {
  background-image: linear-gradient(
      to bottom,
      map.get($palette-colors, "azure-6"),
      map.get($palette-colors, "azure-10"),
      map.get($palette-colors, "azure-14")
    ),
    radial-gradient(
      at top center,
      rgba(255, 255, 255, 1) 0,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-blend-mode: multiply, multiply;
}

h1 {
  font-size: 2rem;
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
li,
a {
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

@media only screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media only screen and (max-width: 576px) {
  html {
    font-size: 12px;
  }
}

@media only screen and (max-width: 500px) {
  html {
    font-size: 10px;
  }
}

@media only screen and (max-width: 400px) {
  html {
    font-size: 9px;
  }
}
</style>
