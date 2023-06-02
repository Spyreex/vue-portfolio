<script setup>
import QualityBlock from "@/components/cv/QualityBlock.vue";
import { reactive, onMounted } from "vue";

var enEls = [];
var nlEls = [];
var jpEls = [];

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

const language = reactive({
  currentLanguage: "nl",
});

onMounted(() => {
  enEls = document.querySelectorAll("html [lang='en']");
  nlEls = document.querySelectorAll("[lang='nl']");
  jpEls = document.querySelectorAll("[lang='jp']");

  enEls.forEach((el) => {
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
        <h1>Curriculum Vitae - Daniël Phoeng</h1>
      </div>
      <div class="right">
        <ul class="navigation">
          <li>
            <a href="#who">{{ $t("message.who") }}</a>
          </li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#qualities">Qualities</a></li>
        </ul>
        <select v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
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
                <p lang="nl">Utrecht, Nederland</p>
                <p lang="en">Utrecht, The Netherlands</p>
                <p lang="jp">Utrecht, オランダ</p>
              </div>
              <div class="line">
                <p>&nbsp;</p>
              </div>
              <div class="line">
                <p lang="nl">Nederlandse</p>
                <p lang="en">Dutch</p>
                <p lang="jp">オランダ人</p>
              </div>
              <div class="line">
                <p lang="nl">Geboren op 3 Juli 2001</p>
                <p lang="en">Born on 3 July 2001</p>
                <p lang="jp">Born on 3 July 2001</p>
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
                <h2 lang="nl">Wie ben ik?</h2>
                <h2 lang="en">Who am I?</h2>
                <h2 lang="jp">私は誰か</h2>
              </div>
              <p lang="nl">
                Mijn naam is Daniël Phoeng, ik ben 21 jaar en ik woon in Utrecht
              </p>
              <p lang="nl">
                Ik ben een zorgvuldige werker, ik vind het belangrijk dat ik het
                beste uit mijzelf haal. Verder ben ik een erg positief en
                optimistisch persoon. Ik zal niet snel de hoop opgeven. Maar hoe
                ben ik hier gekomen?
              </p>
              <p lang="nl">
                Van jongs af aan was ik al geïnteresseerd in programeren, maar
                mijn eerste echte contact met programeren was op de HAVO bij het
                keuzedeel ICT. Vanaf toen wist ik eigenlijk al dat ik later iets
                wou doen met software.
              </p>
              <p lang="nl">
                Nadat ik het HAVO succesvol had afgerond heb ik twee keer
                geprobeerd om een opleiding af te ronden. Achteraf gezien vind
                ik dat ik nog te onvolwassen was voor die opleidingen. Na de
                tweede keer gestopt te zijn van een opleiding heb ik een
                tussenjaar genomen.
              </p>
              <p lang="nl">
                Dat brengt ons op vandaag, met 100 keer zoveel ervaring en vele
                malen volwassenner zit ik op de opleiding Software Developer op
                het MBO Utrecht. Natuurlijk ben ik nog steeds niet perfect, maar
                ik streef er altijd naar om mijzelf te verbeteren!
              </p>
            </div>
          </div>
          <div class="col col-half">
            <div class="hobbies" id="hobbies">
              <div class="head">
                <h2 lang="nl">Hobbies</h2>
              </div>
              <h3>Koken</h3>
              <p lang="nl">
                Elke donderdag kook ik, mijn moeder leert mij dan nieuwe
                recepten of herhaald oudere recepten. Ik wil vooral koken zodat
                ik later goed op mijzelf kan wonen, maar ik vind het ook gewoon
                heel leuk om te doen.
              </p>
              <h3>Gamen</h3>
              <p lang="nl">
                Mijn favoriete games zijn op dit moment Civilization IV, League
                of Legends, osu! en Hell Let Loose. Ik ben erg competitief
                ingesteld, dus ik hou wel van een toernooitje.
              </p>
              <h3>Piano / Muziek</h3>
              <p lang="nl">
                Ik heb een keyboard op mijn kamer waar ik af en toe op zit, ik
                speel dan vooral electronische muziek stukken. Verder luister ik
                heel erg veel naar muziek en bijna altijd terwijl ik dingen aan
                het doen ben.
              </p>
              <h3>Reizen</h3>
              <p lang="nl">
                Ik hou van reizen, niet alleen het buitenland maar ook gewoon
                binnen Nederland. Zo neem ik soms grote omwegen met de fiets om
                meer te zien van het land.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-half">
            <div class="education" id="education">
              <div class="head">
                <h2 lang="nl">Opleidingen</h2>
              </div>
              <div class="row">
                <div class="col period"><p lang="nl">2021 - Heden</p></div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>MBO Utrecht</h3>
                  <p lang="nl" class="underline what">Software Developer</p>
                  <p lang="nl">Talen en frameworks:</p>
                  <ul>
                    <li>C#</li>
                    <li>JavaScript, HTML, (S)CSS</li>
                    <li>MySQL</li>
                    <li>SQL Server</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Vue.js</li>
                  </ul>
                  <p lang="nl">Keuzedelen:</p>
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
                  <p lang="nl">Talen:</p>
                  <ul>
                    <li>C</li>
                  </ul>
                  <p class="red"><b lang="nl">Niet afgerond</b></p>
                </div>
              </div>
              <div class="row">
                <div class="col period"><p>2018 - 2019</p></div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3 lang="nl">Hogeschool Utrecht</h3>
                  <p class="underline what">HBO-ICT Bachelor</p>
                  <p lang="nl">Talen:</p>
                  <ul>
                    <li lang="nl">Python</li>
                  </ul>
                  <p class="red" lang="nl"><b>Niet afgerond</b></p>
                </div>
              </div>
              <div class="row">
                <div class="col period"><p>2013 - 2018</p></div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>Leidsche Rijn College</h3>
                  <p class="underline what">HAVO - Natuur & Techniek</p>
                  <p lang="nl">Keuzedeel:</p>
                  <ul>
                    <li lang="nl">Economie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-half">
            <div class="experience" id="experience">
              <div class="head">
                <h2 lang="nl">Werkervaring</h2>
              </div>
              <div class="row">
                <div class="col period">
                  <p lang="nl">Oktober 2020 - Augustus 2021</p>
                </div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>Picnic B.V.</h3>
                  <p class="underline what">Shopper</p>
                  <p lang="nl">Magazijnmedewerker in een distribute centrum</p>
                  <ul>
                    <li lang="nl">
                      Verzamelen van boodschappen in het magazijn
                    </li>
                    <li lang="nl">Laden en lossen van vrachtwagens</li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col period">
                  <p lang="nl">Februari 2017 - Augustus 2018</p>
                </div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>Vomar voordeelmarkt</h3>
                  <p class="underline what" lang="nl">Vakkenvuller</p>
                  <p lang="nl">Vakkenvuller in een supermarkt</p>
                  <ul>
                    <li lang="nl">Aanvullen boodschappen in schappen</li>
                    <li lang="nl">Spiegelen van producten</li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col period">
                  <p lang="nl">December 2015 - Mei 2016</p>
                </div>
                <div class="col bar"></div>
                <div class="col info">
                  <h3>ATV Stadion</h3>
                  <p class="underline what" lang="nl">Winkelhulp</p>
                  <p lang="nl">
                    Maatschappelijke stage: Winkelhulp in de tuin winkel
                  </p>
                  <ul>
                    <li lang="nl">Aanvullen goederen</li>
                    <li lang="nl">
                      Afrekenen aankopen van klanten aan de kassa
                    </li>
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
                <h2 lang="nl">Vaardigheden</h2>
              </div>
              <div class="coding">
                <h3 lang="nl">Programeer ervaring</h3>
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
                <h3 lang="nl">Taal vaardigheden</h3>
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
}

@media only screen and (max-width: 768px) {
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
