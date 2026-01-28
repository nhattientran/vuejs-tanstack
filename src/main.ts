/// <reference types="unplugin-vue-router/client" />
import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import "./style.css";
import App from "./App.vue";

// Create router instance with auto-generated routes
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");
