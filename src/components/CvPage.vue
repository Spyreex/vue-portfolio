<script setup>
import { reactive, onMounted } from "vue";

var enEls = [];
var nlEls = [];
var jpEls = [];

const language = reactive({
  currentLanguage: "en",
});

onMounted(() => {
  enEls = document.querySelectorAll("html [lang='en']");
  nlEls = document.querySelectorAll("[lang='nl']");
  jpEls = document.querySelectorAll("[lang='jp']");

  nlEls.forEach((el) => {
    el.classList.toggle("language-disabled", true);
  });
  jpEls.forEach((el) => {
    el.classList.toggle("language-disabled", true);
  });
});

function changeLanguage(lang) {
  switch (language.currentLanguage) {
    case "en":
      enEls.forEach((el) => {
        el.classList.toggle("language-disabled", true);
      });
      break;

    case "nl":
      nlEls.forEach((el) => {
        el.classList.toggle("language-disabled", true);
      });
      break;

    case "jp":
      jpEls.forEach((el) => {
        el.classList.toggle("language-disabled", true);
      });
      break;

    default:
      break;
  }

  language.currentLanguage = lang;
  switch (lang) {
    case "en":
      enEls.forEach((el) => {
        el.classList.toggle("language-disabled", false);
      });
      break;

    case "nl":
      nlEls.forEach((el) => {
        el.classList.toggle("language-disabled", false);
      });
      break;

    case "jp":
      jpEls.forEach((el) => {
        el.classList.toggle("language-disabled", false);
      });
      break;

    default:
      break;
  }
}
</script>

<template>
  <div class="cv">
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
          <span
            class="fi fi-gb"
            v-if="language.currentLanguage === 'en'"
          ></span>
          <span
            class="fi fi-nl"
            v-else-if="language.currentLanguage === 'nl'"
          ></span>
          <span class="fi fi-jp" v-else></span>
          <div class="select-language">
            <span class="fi fi-gb" @click="changeLanguage('en')"></span>
            <span class="fi fi-nl" @click="changeLanguage('nl')"></span>
            <span class="fi fi-jp" @click="changeLanguage('jp')"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="profile">
        <div class="blob"></div>
        <div class="blob-2"></div>
        <div class="blob-3"></div>
        <div class="card-content">
          <div class="portret">
            <h1>Daniël Phoeng</h1>
            <img src="@/assets/images/cv.png" alt="" />
          </div>
          <div class="info">
            <div class="text">
              <p>+31 6balls</p>
              <p lang="en">danielphoeng@gmail.com</p>
              <p lang="nl">danielphoeng@gmail.com</p>
              <p lang="jp">ダニエル@gmail.com</p>
            </div>
            <div class="links">
              <a href="https://github.com/Spyreex">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://github.com/dphoeng">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/daniël-phoeng-b3b50325b/">
                <i class="bx bxl-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
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

.language-disabled {
  display: none;
}

div.container {
  display: flex;
  width: 100%;
  justify-content: center;
}

div.profile {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin: 2rem;
  padding: 0.75rem 1rem 1rem 1rem;
  width: 40%;
  border-radius: 2rem;
  background-image: linear-gradient(
    to bottom right,
    map.get($palette-colors, "azure-15"),
    map.get($palette-colors, "azure-5")
  );
  box-shadow: 0.2rem 0.2rem 0.5rem 0 black;
  p,
  h2 {
    color: black;
  }
  a {
    color: white;
  }
  h1 {
    margin: 0;
    z-index: 1;
  }
  p {
    font-size: 1.2rem;
    margin: 0;
  }
  div.blob {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 120%;
      border-radius: 0 50% 70% 0;
      background-color: rgb(84, 84, 84);
      z-index: 0;
    }
  }
  div.blob-2 {
    &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: -10%;
      width: 60%;
      height: 40%;
      border-radius: 80% 30% 0 20%;
      background-color: rgb(120, 120, 120);
      z-index: 0;
      // mix-blend-mode: hard-light;
    }
  }

  div.blob-3 {
    &::before {
      content: "";
      position: absolute;
      top: -10%;
      left: 25%;
      transform: translateX(-50%);
      width: 70%;
      height: 30%;
      border-radius: 10% 10% 42% 58% / 10% 36% 64% 40%;
      background-color: rgb(59, 59, 59);
      z-index: 0;
    }
  }

  div.card-content {
    display: flex;
    flex-direction: row;
    z-index: 1;

    div.portret {
      display: flex;
      flex-direction: column;
      width: 50%;
      img {
        object-fit: cover;
        width: 70%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        margin-top: 2rem;
      }
    }
    div.info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      div.text {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      div.links {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        a {
          font-size: 4rem;
          line-height: 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  div.profile {
    width: 50%;
  }
}

@media only screen and (max-width: 1200px) {
  div.profile {
    width: 60%;
  }
}

@media only screen and (max-width: 1000px) {
  div.profile {
    width: 75%;
  }
}

@media only screen and (max-width: 768px) {
  div.profile {
    width: 90%;
    margin: 1rem;
  }
}

@media only screen and (max-width: 576px) {
  div.profile {
    width: 100%;
  }
}
</style>
