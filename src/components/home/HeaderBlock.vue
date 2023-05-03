<script setup></script>

<template>
  <div class="header">
    <div class="title">
      <h1>Daniël Phoeng</h1>
      <p>Welcome to my site!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.header {
  display: flex;
  height: 20vh;
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

@media only screen and (max-width: 620px) {
  div.header {
    div.title {
      h1 {
        font-size: 3rem;
        line-height: 3rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
}

@media only screen and (max-width: 481px) {
  div.header {
    div.title {
      h1 {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
  }
}

@media only screen and (max-width: 320px) {
  div.header {
    div.title {
      h1 {
        font-size: 2rem;
        line-height: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
}

@media only screen and (orientation: landscape) and (max-height: 600px) {
  div.header {
    padding: 0;
    div.title {
      h1 {
        line-height: 4rem;
      }
      p {
        display: none;
      }
    }
  }
}
</style>
