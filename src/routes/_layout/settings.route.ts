import { createFileRoute } from "@tanstack/vue-router";
import SettingsComponent from "./settings.component.vue";

export const Route = createFileRoute("/_layout/settings")({
  component: SettingsComponent,
});
