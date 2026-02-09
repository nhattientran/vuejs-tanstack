import { createFileRoute } from "@tanstack/vue-router";
import LoginComponent from "./login.component.vue";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});
