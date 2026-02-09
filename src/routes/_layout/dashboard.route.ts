import { createFileRoute } from "@tanstack/vue-router";
import DashboardComponent from "./dashboard.component.vue";

export const Route = createFileRoute("/_layout/dashboard")({
  component: DashboardComponent,
});
