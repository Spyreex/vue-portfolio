import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import CvPage from "./components/CvPage.vue";
import "@/assets/sass/style.scss";
import "flag-icons/css/flag-icons.min.css";
import "boxicons/css/boxicons.min.css";
import "hamburgers/dist/hamburgers.min.css";
import { createI18n } from "vue-i18n";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/cv",
    name: "cv",
    component: CvPage,
  },
];

const messages = {
  gb: {
    headings: {
      who: "Who am I?",
      hobbies: "Hobbies",
      education: "Education",
      experience: "Work experience",
      qualities: "Qualities",
    },
    card: {
      residence: "Utrecht, The Netherlands",
      nationality: "Nederlandse",
      birthday: "Born on the 3rd of July 2001",
    },
    who: {
      intro_1:
        "My name is Daniël Phoeng, I am 21 years old and I live in Utrecht",
      // intro_2: "",
      // intro_3: "",
      // intro_4: "",
      // intro_5: "",
    },
    hobbies: {
      headings: {
        hobby_1: "Cooking",
        hobby_2: "Gaming",
        hobby_3: "Piano / Music",
        hobby_4: "Traveling",
      },
      text: {
        // explanation_1: "",
        // explanation_2: "",
        // explanation_3: "",
        // explanation_4: "",
      },
    },
    // education: {
    //   text: {
    //     present: "",
    //     languages: "",
    //     and_frameworks: "",
    //     optional: "",
    //     unfinished: "",
    //   },
    //   subjects: {
    //     economy: "",
    //   },
    // },
    // experience: {
    //   dates: {
    //     job_period_1: "",
    //     job_period_2: "",
    //     job_period_3: "",
    //   },
    //   function: {
    //     job_function_1: "",
    //     job_function_2: "",
    //     job_function_3: "",
    //   },
    //   info: {
    //     job_info_1_1: "",
    //     job_info_1_2: "",
    //     job_info_2_1: "",
    //     job_info_2_2: "",
    //     job_info_3_1: "",
    //     job_info_3_2: "",
    //   },
    // },
    // qualities: {
    //   headings: {
    //     programming: "",
    //     language: "",
    //   },
    // },
  },
  nl: {
    headings: {
      who: "Wie ben ik?",
      hobbies: "Hobbies",
      education: "Opleidingen",
      experience: "Werkervaring",
      qualities: "Vaardigheden",
    },
    card: {
      residence: "Utrecht, Nederland",
      nationality: "Nederlandse",
      birthday: "Geboren op 3 Juli 2001",
    },
    who: {
      intro_1:
        "Mijn naam is Daniël Phoeng, ik ben 21 jaar en ik woon in Utrecht",
      intro_2:
        "Ik ben een zorgvuldige werker, ik vind het belangrijk dat ik het beste uit mijzelf haal. Verder ben ik een erg positief en optimistisch persoon. Ik zal niet snel de hoop opgeven. Maar hoe ben ik hier gekomen?",
      intro_3:
        "Van jongs af aan was ik al geïnteresseerd in programeren, maar mijn eerste echte contact met programeren was op de HAVO bij het keuzedeel ICT. Vanaf toen wist ik eigenlijk al dat ik later iets wou doen met software.",
      intro_4:
        "Nadat ik het HAVO succesvol had afgerond heb ik twee keergeprobeerd om een opleiding af te ronden. Achteraf gezien vindik dat ik nog te onvolwassen was voor die opleidingen. Na detweede keer gestopt te zijn van een opleiding heb ik eentussenjaar genomen.",
      intro_5:
        "Dat brengt ons op vandaag, met 100 keer zoveel ervaring en velemalen volwassenner zit ik op de opleiding Software Developer ophet MBO Utrecht. Natuurlijk ben ik nog steeds niet perfect, maarik streef er altijd naar om mijzelf te verbeteren!",
    },
    hobbies: {
      headings: {
        hobby_1: "Koken",
        hobby_2: "Gamen",
        hobby_3: "Piano / Muziek",
        hobby_4: "Reizen",
      },
      text: {
        explanation_1:
          "Elke donderdag kook ik, mijn moeder leert mij dan nieuwerecepten of herhaald oudere recepten. Ik wil vooral koken zodatik later goed op mijzelf kan wonen, maar ik vind het ook gewoonheel leuk om te doen.",
        explanation_2:
          "Mijn favoriete games zijn op dit moment Civilization IV, Leagueof Legends, osu! en Hell Let Loose. Ik ben erg competitiefingesteld, dus ik hou wel van een toernooitje.",
        explanation_3:
          "Ik heb een keyboard op mijn kamer waar ik af en toe op zit, ikspeel dan vooral electronische muziek stukken. Verder luister ikheel erg veel naar muziek en bijna altijd terwijl ik dingen aanhet doen ben.",
        explanation_4:
          "Ik hou van reizen, niet alleen het buitenland maar ook gewoonbinnen Nederland. Zo neem ik soms grote omwegen met de fiets ommeer te zien van het land.",
      },
    },
    education: {
      text: {
        present: "Heden",
        languages: "Talen",
        and_frameworks: " en frameworks",
        optional: "Keuzedelen",
        unfinished: "Niet afgerond",
      },
      subjects: {
        economy: "Economie",
      },
    },
    experience: {
      dates: {
        job_period_1: "December 2015 - Mei 2016",
        job_period_2: "Februari 2017 - Augustus 2018",
        job_period_3: "Oktober 2020 - Augustus 2021",
      },
      function: {
        job_function_1: "Maatschappelijke stage: Winkelhulp in de tuin winkel",
        job_function_2: "Vakkenvuller in een supermarkt",
        job_function_3: "Magazijnmedewerker in een distribute centrum",
      },
      info: {
        job_info_1_1: "Aanvullen goederen",
        job_info_1_2: "Afrekenen aankopen van klanten aan de kassa",
        job_info_2_1: "Verzamelen van boodschappen in het magazijn",
        job_info_2_2: "Laden en lossen van vrachtwagens",
        job_info_3_1: "Aanvullen boodschappen in schappen",
        job_info_3_2: "Spiegelen van producten",
      },
    },
    qualities: {
      headings: {
        programming: "Programeer ervaring",
        language: "Taal vaardigheden",
      },
    },
  },
  jp: {
    headings: {
      // who: "",
      // hobbies: "",
      // education: "",
      // experience: "",
      // qualities: "",
      // birthday: "",
    },
    card: {
      residence: "Utrecht, オランダ",
      nationality: "オランダ人",
      // birthday: "",
    },
    who: {
      // intro_1: "",
      // intro_2: "",
      // intro_3: "",
      // intro_4: "",
      // intro_5: "",
    },
    hobbies: {
      headings: {
        hobby_1: "料理",
        // hobby_2: "Gaming",
        // hobby_3: "",
        // hobby_4: "Traveling",
      },
      text: {
        // explanation_1: "",
        // explanation_2: "",
        // explanation_3: "",
        // explanation_4: "",
      },
    },
    // education: {
    //   text: {
    //     present: "",
    //     languages: "",
    //     and_frameworks: "",
    //     optional: "",
    //     unfinished: "",
    //   },
    //   subjects: {
    //     economy: "",
    //   },
    // },
    // experience: {
    //   dates: {
    //     job_period_1: "",
    //     job_period_2: "",
    //     job_period_3: "",
    //   },
    //   function: {
    //     job_function_1: "",
    //     job_function_2: "",
    //     job_function_3: "",
    //   },
    //   info: {
    //     job_info_1_1: "",
    //     job_info_1_2: "",
    //     job_info_2_1: "",
    //     job_info_2_2: "",
    //     job_info_3_1: "",
    //     job_info_3_2: "",
    //   },
    // },
    // qualities: {
    //   headings: {
    //     programming: "",
    //     language: "",
    //   },
    // },
  },
};

const i18n = createI18n({
  locale: "nl", // set locale
  fallbackLocale: ["gb", "nl"], // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).use(i18n).mount("#app");
