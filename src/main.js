import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import CvPage from "./components/CvPage.vue";
import "@/assets/sass/style.scss";
import "@/assets/sass/theme-colors.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";

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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app");
