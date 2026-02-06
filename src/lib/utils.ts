import type { Updater } from "@tanstack/vue-table"
import type { ClassValue } from "clsx"
import type { Ref } from "vue"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === "function"
      ? updaterOrValue(ref.value)
      : updaterOrValue
}

/**
 * Format form validation errors for display
 * Handles both string errors and Zod error objects
 */
export function formatFormErrors(errors: Array<string | { message?: string } | unknown>): string[] {
  return errors.map((err) => {
    if (typeof err === "string") return err;
    if (err && typeof err === "object" && "message" in err) {
      return String(err.message);
    }
    return String(err);
  });
}
