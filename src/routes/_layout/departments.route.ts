import { createFileRoute } from "@tanstack/vue-router";
import DepartmentsComponent from "./departments.component.vue";

export const Route = createFileRoute("/_layout/departments")({
  component: DepartmentsComponent,
});
