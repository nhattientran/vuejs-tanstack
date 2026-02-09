import { createFileRoute } from "@tanstack/vue-router";
import EmployeesComponent from "./employees.component.vue";

export const Route = createFileRoute("/_layout/employees")({
  component: EmployeesComponent,
});
