import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createRouter, RouterProvider } from "@tanstack/vue-router";
import { routeTree } from "./routeTree.gen";
import i18n from "./i18n";
import "./style.css";

// Create router instance with the generated route tree
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register the router instance for type safety
declare module "@tanstack/vue-router" {
  interface Register {
    router: typeof router;
  }
}

const app = createApp(RouterProvider, { router });
app.use(createPinia());
app.use(i18n);
app.use(VueQueryPlugin);
app.mount("#app");
