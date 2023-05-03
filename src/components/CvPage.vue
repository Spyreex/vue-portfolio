<script setup>
import { reactive } from "vue";

document.documentElement.lang = "en";

const language = reactive({
  currentLanguage: "gb",
});

function changeLanguage(lang) {
  language.currentLanguage = lang;
  if (lang === "gb") document.documentElement.lang = "en";
  else document.documentElement.lang = lang;
  console.log(document.documentElement.lang);
}
</script>

<template>
  <div class="nav">
    <div class="left">
      <h1>CV</h1>
    </div>
    <div class="right">
      <ul class="navigation">
        <li>Balls</li>
        <li>Chicken</li>
        <li>Everytime</li>
        <li>I</li>
        <li>Find</li>
      </ul>
      <div class="languages">
        <span class="fi fi-nl" v-if="language.currentLanguage === 'nl'"></span>
        <span
          class="fi fi-gb"
          v-else-if="language.currentLanguage === 'gb'"
        ></span>
        <span class="fi fi-jp" v-else></span>
        <div class="select-language">
          <span class="fi fi-nl" @click="changeLanguage('nl')"></span>
          <span class="fi fi-gb" @click="changeLanguage('gb')"></span>
          <span class="fi fi-jp" @click="changeLanguage('jp')"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="photo">
    <img src="@/assets/images/cv.png" alt="" />

    <div class="title">
      <h1>Daniël Phoeng</h1>
      <p>Balls enjoyer</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/theme-colors.scss";

div.nav {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 1rem 0 black;
  padding: 0rem 2rem;

  div.left {
    display: flex;
  }

  div.right {
    display: flex;
    align-items: center;
    column-gap: 2rem;

    ul {
      padding: 0;
      margin: 0;
    }

    ul.navigation {
      display: flex;
      list-style: none;
      li {
        padding: 1rem;
      }
    }
    div.languages {
      position: relative;
      span {
        font-size: 1.5rem;
      }
      > span {
        padding: 0.5rem 1rem;
      }

      &:hover {
        div.select-language {
          display: flex;
        }
      }
      div.select-language {
        display: none;
        position: absolute;
        flex-direction: column;
        row-gap: 0.5rem;
        border: 1px black solid;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem;
        background-color: rgba(0, 0, 0, 0.1);
        span {
          padding: 0rem 1rem;
          cursor: pointer;
        }
      }
    }
  }
}

div.photo {
  display: flex;
  img {
    object-fit: cover;
    aspect-ratio: 1/1;
    height: 50%;
    border-radius: 50%;
    box-shadow: 0 0 1rem 0 black;
  }
}
</style>
