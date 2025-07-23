// src/router.js
import { createRouter, createWebHistory } from "vue-router";
// Import your components
import Acceiul from "./components/Acceiul.vue";
import Sermonts from "./components/Sermonts.vue";
import Evernements from "./components/Evernements.vue";
import Contact from "./components/Contact.vue";
import Apropos from "./components/Apropos.vue";
import NotFound from "./components/NotFound.vue";
const routes = [
  { path: "/", component: Acceiul },
  { path: "/Sermonts", component: Sermonts },
  { path: "/Evernements", component: Evernements },
  { path: "/Contact", component: Contact },
  { path: "/Apropos", component: Apropos },
  // ⚠️ Cette route doit toujours être la dernière
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
