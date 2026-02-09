import { createFileRoute } from "@tanstack/vue-router";
import LayoutComponent from "@/components/layout/app-layout.vue";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});
