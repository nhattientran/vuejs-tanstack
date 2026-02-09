import { createFileRoute } from "@tanstack/vue-router";
import ReportsComponent from "./reports.component.vue";

export const Route = createFileRoute("/_layout/reports")({
  component: ReportsComponent,
});
