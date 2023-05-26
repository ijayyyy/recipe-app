import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/main.css";
import HomePage from "@/Views/HomePage.vue";
import AboutPage from "@/Views/AboutPage.vue";
import ContactPage from "@/Views/ContactPage.vue";
import RecipeDeets from "@/Views/RecipeDeets.vue";
import TheRecipes from "@/Views/TheRecipes.vue";
import MyCard from "@/components/MyCard.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp, faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons";

/* import specific icons */
import {
  faSearch,
  faHatWizard,
  faCircleNotch,
  faPlay,
  faBars,
  faClose,
  faUserSecret,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faSearch, faHatWizard, faCircleNotch, faPlay, faBars, faClose, faUserSecret, faWhatsapp, faTwitter, faGithub, faEnvelope, faDownload);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/AboutPage",
      name: "AboutPage",
      component: AboutPage,
    },
    {
      path: "/ContactPage",
      name: "ContactPage",
      component: ContactPage,
    },
    {
      path: "/RecipeDeets",
      name: "RecipeDeets",
      component: RecipeDeets,
    },
    {
      path: "/TheRecipes",
      name: "TheRecipes",
      component: TheRecipes,
    },
    {
      path: "/MyCard",
      name: "MyCard",
      component: MyCard,
    },
  ],
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
