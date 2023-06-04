<script setup>
import QualityBlock from "@/components/cv/QualityBlock.vue";
import { reactive } from "vue";

class Quality {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

const qualities = [
  new Quality("PHP", 9),
  new Quality("HTML", 9),
  new Quality("MySQL/SQL Server", 9),
  new Quality("JavaScript", 8),
  new Quality("(S)CSS", 7),
  new Quality("C#", 6),
  new Quality("Vue.js", 5),
  new Quality("Python", 5),
  new Quality("C", 2),
  new Quality("Laravel", 2),
];

const languages = [
  new Quality("Nederlands", 9),
  new Quality("Engels", 9),
  new Quality("Japans", 1),
];

const hamburger = reactive({
  isActive: false,
});
</script>

<template>
  <div class="cv">
    <div class="nav">
      <div class="left">
        <h1>Curriculum Vitae - Daniël Phoeng</h1>
      </div>
      <div class="right">
        <button
          :class="
            hamburger.isActive
              ? 'hamburger hamburger--elastic is-active'
              : 'hamburger hamburger--elastic '
          "
          type="button"
          @click="hamburger.isActive = !hamburger.isActive"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div
          :class="hamburger.isActive ? 'navigation is-active' : 'navigation'"
        >
          <div class="nav-list">
            <a href="#who" @click="hamburger.isActive = false">{{
              $t("headings.who")
            }}</a>
            <a href="#hobbies" @click="hamburger.isActive = false">{{
              $t("headings.hobbies")
            }}</a>
            <a href="#education" @click="hamburger.isActive = false">{{
              $t("headings.education")
            }}</a>
            <a href="#experience" @click="hamburger.isActive = false">{{
              $t("headings.experience")
            }}</a>
            <a href="#qualities" @click="hamburger.isActive = false">{{
              $t("headings.qualities")
            }}</a>
          </div>
          <div class="languages">
            <span :class="`fi fi-${$i18n.locale}`"></span>
            <div class="select-language">
              <span
                v-for="(locale, index) in $i18n.availableLocales"
                :class="`fi fi-${locale}`"
                @click="$i18n.locale = locale"
                :key="index"
              ></span>
            </div>
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
            <h2>Daniël Phoeng</h2>
            <p>Junior Software Developer</p>
            <img src="@/assets/images/cv4.png" alt="" />
          </div>
          <div class="info">
            <div class="text">
              <div class="line">
                <p>danielphoeng@gmail.com</p>
              </div>
              <div class="line">
                <p>+31 6</p>
                <p class="blurred">12345678</p>
              </div>
              <div class="line">
                <p class="blurred">Fake Address 42</p>
              </div>
              <div class="line">
                <p>{{ $t("card.residence") }}</p>
              </div>
              <div class="line">
                <p>&nbsp;</p>
              </div>
              <div class="line">
                <p>{{ $t("card.nationality") }}</p>
              </div>
              <div class="line">
                <p>{{ $t("card.birthday") }}</p>
              </div>
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
              <a href="https://spyreex.github.io/vue-portfolio/">
                <i class="bx bx-archive"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="information">
        <div class="row">
          <div class="col col-half">
            <div class="who" id="who">
              <div class="head">
                <h2>{{ $t("headings.who") }}</h2>
              </div>
              <p>
                {{ $t("who.intro_1") }}
              </p>
              <p>
                {{ $t("who.intro_2") }}
              </p>
              <p>
                {{ $t("who.intro_3") }}
              </p>
              <p>
                {{ $t("who.intro_4") }}
              </p>
              <p>
                {{ $t("who.intro_5") }}
              </p>
            </div>
          </div>
          <div class="col col-half">
            <div class="hobbies" id="hobbies">
              <div class="head">
                <h2>{{ $t("headings.hobbies") }}</h2>
              </div>
              <h3>{{ $t("hobbies.headings.hobby_1") }}</h3>
              <p>{{ $t("hobbies.text.explanation_1") }}</p>
              <h3>{{ $t("hobbies.headings.hobby_2") }}</h3>
              <p>{{ $t("hobbies.text.explanation_2") }}</p>
              <h3>{{ $t("hobbies.headings.hobby_3") }}</h3>
              <p>{{ $t("hobbies.text.explanation_3") }}</p>
              <h3>{{ $t("hobbies.headings.hobby_4") }}</h3>
              <p>{{ $t("hobbies.text.explanation_4") }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-half">
            <div class="education" id="education">
              <div class="head">
                <h2>{{ $t("headings.education") }}</h2>
              </div>
              <div class="row">
                <div class="col period">
                  <p>2021 - {{ $t("education.text.present") }}</p>
                </div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>MBO Utrecht</h3>
                  <p class="underline what">Software Developer</p>
                  <p>
                    {{
                      $t("education.text.languages") +
                      $t("education.text.and_frameworks")
                    }}:
                  </p>
                  <ul>
                    <li>C#</li>
                    <li>JavaScript, HTML, (S)CSS</li>
                    <li>MySQL</li>
                    <li>SQL Server</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Vue.js</li>
                  </ul>
                  <p>{{ $t("education.text.optional") }}:</p>
                  <ul>
                    <li>Basisprogrammeren van games</li>
                    <li>Gameplay</li>
                    <li>Frontend</li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col period"><p>2019 - 2020</p></div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>Codam Coding College</h3>
                  <p>{{ $t("education.text.languages") }}:</p>
                  <ul>
                    <li>C</li>
                  </ul>
                  <p class="red">
                    <b>{{ $t("education.text.unfinished") }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col period"><p>2018 - 2019</p></div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>Hogeschool Utrecht</h3>
                  <p class="underline what">HBO-ICT Bachelor</p>
                  <p>{{ $t("education.text.languages") }}:</p>
                  <ul>
                    <li>Python</li>
                  </ul>
                  <p class="red">
                    <b>{{ $t("education.text.unfinished") }}</b>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col period"><p>2013 - 2018</p></div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>Leidsche Rijn College</h3>
                  <p class="underline what">HAVO - Natuur & Techniek</p>
                  <p>{{ $t("education.text.optional") }}:</p>
                  <ul>
                    <li>Economie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-half">
            <div class="experience" id="experience">
              <div class="head">
                <h2>{{ $t("headings.experience") }}</h2>
              </div>
              <div class="row">
                <div class="col period">
                  <p>{{ $t("experience.dates.job_period_3") }}</p>
                </div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>Picnic B.V.</h3>
                  <p class="underline what">Shopper</p>
                  <p>{{ $t("experience.function.job_function_3") }}</p>
                  <ul>
                    <li>{{ $t("experience.info.job_info_3_1") }}</li>
                    <li>{{ $t("experience.info.job_info_3_2") }}</li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col period">
                  <p>{{ $t("experience.dates.job_period_2") }}</p>
                </div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>Vomar voordeelmarkt</h3>
                  <p class="underline what">Vakkenvuller</p>
                  <p>{{ $t("experience.function.job_function_2") }}</p>
                  <ul>
                    <li>{{ $t("experience.info.job_info_2_1") }}</li>
                    <li>{{ $t("experience.info.job_info_2_2") }}</li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col period">
                  <p>{{ $t("experience.dates.job_period_1") }}</p>
                </div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>ATV Stadion</h3>
                  <p class="underline what">Winkelhulp</p>
                  <p>{{ $t("experience.function.job_function_1") }}</p>
                  <ul>
                    <li>{{ $t("experience.info.job_info_1_1") }}</li>
                    <li>{{ $t("experience.info.job_info_1_2") }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-full">
            <div class="qualities" id="qualities">
              <div class="head">
                <h2>{{ $t("headings.qualities") }}</h2>
              </div>
              <div class="coding">
                <h3>{{ $t("qualities.headings.programming") }}</h3>
                <div class="block">
                  <QualityBlock
                    v-for="(quality, index) in qualities"
                    :key="index"
                    :name="quality.name"
                    :grade="quality.grade"
                  ></QualityBlock>
                </div>
              </div>
              <div class="languages">
                <h3>{{ $t("qualities.headings.language") }}</h3>
                <div class="block">
                  <QualityBlock
                    v-for="(language, index) in languages"
                    :key="index"
                    :name="language.name"
                    :grade="language.grade"
                  ></QualityBlock>
                </div>
              </div>
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

  div.left {
    display: flex;
    align-items: center;
    padding-left: 2rem;
  }

  div.right {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding-right: 2rem;
    width: 56%;
    justify-content: flex-end;

    ul {
      padding: 0;
      margin: 0;
    }

    button.hamburger {
      display: none;
    }

    div.navigation {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      div.nav-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        a {
          padding: 0.75rem;
          text-decoration: none;
          color: white;
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
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
}

.language-disabled {
  display: none;
}

div.container {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}

.blurred {
  filter: blur(0.25rem);
}
.red {
  color: #ed474a;
}
div.information {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  div.row {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    width: 100%;
    column-gap: 3rem;
    div.col {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      &.col-half {
        width: 50%;
      }
      &.col-full {
        width: 100%;
      }
      div.row {
        column-gap: 0;
        padding: 0;
      }
      div.education,
      div.experience {
        div.col {
          padding: 0;
        }
        div.period {
          width: 30%;
          p {
            line-height: 1.5rem;
            margin: 0;
          }
        }
        div.bar {
          position: relative;
          width: 10%;
          &::after {
            content: "";
            height: 100%;
            transform: translateX(-50%);
            left: 50%;
            position: absolute;
            z-index: 3;
            border-right: 3px solid black;
          }
          &::before {
            content: "";
            width: 0.75rem;
            height: 0.75rem;
            left: 50%;
            top: 3px;
            transform: translateX(-50%);
            position: absolute;
            border: 3px solid black;
            background-color: white;
            z-index: 5;
            border-radius: 50%;
          }
        }
        div.info {
          width: 60%;
          margin-bottom: 1rem;
          .underline {
            text-decoration: underline;
          }
          .what {
            color: #5bbe6c;
          }
          h3 {
            margin: 0;
            text-decoration: none;
            color: #471ecf;
          }
          p {
            margin: 0.2rem 0;
          }
          ul {
            margin: 0;
            li {
              font-size: 0.9rem;
            }
          }
        }
      }
      div.who {
        p {
          text-align: justify;
        }
      }
      div.hobbies {
        p {
          margin: 0;
          text-align: justify;
        }
      }
      h3 {
        margin: 0.5rem 0 0.25rem 0;
        text-decoration: underline;
      }
      div.head {
        width: 100%;
        border-bottom: 2px solid rgba(255, 255, 255, 0.25);
        margin-bottom: 1rem;
        h2 {
          font-size: 2rem;
          margin: 0;
        }
      }
      div.qualities {
        div.block {
          border-radius: 0.5rem;
          overflow: hidden;
        }
      }
    }
  }
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
  h3 {
    color: black;
  }
  a {
    color: white;
  }
  h2 {
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
    }
  }

  div.blob-3 {
    &::before {
      content: "";
      position: absolute;
      top: -10%;
      left: 25%;
      transform: translateX(-50%);
      width: 55%;
      height: 35%;
      border-radius: 0 60% 40% 90% / 80% 60% 90% 20%;
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
      p {
        color: white;
      }
      img {
        object-fit: cover;
        width: 80%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        margin-top: 2.5rem;
      }
    }
    div.info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      width: 50%;
      div.text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 92%;
        padding-top: 1rem;
        row-gap: 0.5rem;
        div.line {
          display: flex;
          position: relative;
          width: 100%;

          &::after {
            content: "";
            border-bottom: 1px solid black;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: -2px;
          }
          p {
            position: relative;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
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
  div.nav {
    div.right {
      padding-right: 1rem;
    }
    div.left {
      padding-left: 1rem;
      h1 {
        font-size: 1.5rem;
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  div.profile {
    width: 60%;
  }
  div.information {
    width: 80%;
  }
}

@media only screen and (max-width: 1000px) {
  div.profile {
    width: 75%;
  }
  div.information {
    width: 90%;
  }
  div.nav {
    div.right {
      div.navigation {
        a {
          padding: 0.75rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  div.nav {
    div.right {
      position: relative;
      width: 0;
      button.hamburger {
        display: inherit;
        padding: 15px 0 15px 15px;
      }
      div.navigation {
        display: none;
        position: absolute;
        flex-direction: row-reverse;
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: -2px 2px 4px 0 black;
        z-index: 3;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        align-items: flex-start;
        &.is-active {
          display: flex;
        }
        div.nav-list {
          flex-direction: column;
          a {
            font-size: 1.5rem;
            padding: 1rem;
          }
        }
        div.languages {
          padding: 0.5rem 1rem;
          div.select-language {
            row-gap: 1rem;
          }
          span {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
  div.profile {
    width: 90%;
    margin: 1rem;
  }
  div.information {
    width: 100%;
    div.row {
      flex-direction: column;
      padding: 1rem 0;
      div.col.col-half {
        width: 100%;
      }
      div.col {
        div.row {
          flex-direction: row;
        }
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  div.profile {
    width: 100%;
  }
}
</style>
