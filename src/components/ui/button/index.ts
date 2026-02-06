import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Button } from "./Button.vue"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow transition-standard hover:bg-primary/90 cursor-pointer",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm transition-standard hover:bg-destructive/90 cursor-pointer",
        outline:
          "border border-input bg-background shadow-sm transition-standard hover:bg-accent hover:text-accent-foreground cursor-pointer",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm transition-standard hover:bg-secondary/80 cursor-pointer",
        cta: "bg-cta text-cta-foreground shadow transition-standard hover:bg-cta/90 cursor-pointer font-semibold",
        ghost: "transition-standard hover:bg-accent hover:text-accent-foreground cursor-pointer",
        link: "text-primary underline-offset-4 hover:underline cursor-pointer",
      },
      size: {
        "default": "h-10 px-4 py-2 touch-target",
        "xs": "h-7 rounded px-2",
        "sm": "h-9 rounded-md px-3 text-xs touch-target",
        "lg": "h-11 rounded-md px-6 text-base touch-target",
        "icon": "h-10 w-10 touch-target",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
