import { createFileRoute } from "@tanstack/vue-router";
import AttendanceComponent from "./attendance.component.vue";

export const Route = createFileRoute("/_layout/attendance")({
  component: AttendanceComponent,
});
