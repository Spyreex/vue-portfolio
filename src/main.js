import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import CvPage from "./components/CvPage.vue";
import "@/assets/sass/style.scss";
import "flag-icons/css/flag-icons.min.css";
import "boxicons/css/boxicons.min.css";
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
  en: {
    message: {
      who: "Who am I?",
    },
  },
  nl: {
    message: {
      who: "Wie ben ik?",
    },
  },
  jp: {
    message: {},
  },
};

const i18n = createI18n({
  locale: "nl", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).use(i18n).mount("#app");
