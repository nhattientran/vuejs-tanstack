import { createFileRoute } from "@tanstack/vue-router";
import PositionsComponent from "./positions.component.vue";

export const Route = createFileRoute("/_layout/positions")({
  component: PositionsComponent,
});
