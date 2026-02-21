import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={asChild ? type : (type ?? "button")}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// New component: CalendarDayButton (implementation assumed to be external or simplified for this edit)
// Note: `DayButton` type is not defined in the provided context, assuming it's from another import.
function CalendarDayButton({
  className,
  day,
  modifiers,
  variant,
  ...props
}: React.ComponentProps<any> & { // Changed `typeof DayButton` to `any` to avoid compilation error without `DayButton` definition
  variant?: React.ComponentProps<typeof Button>["variant"]
}) {
  // Placeholder implementation for CalendarDayButton
  // You would typically render a Button component here with specific styling for calendar days
  return (
    <Button
      variant={variant || "ghost"} // Default to ghost if variant is not provided
      className={cn(
        "h-9 w-9 p-0 font-normal",
        {
          "bg-accent text-accent-foreground": modifiers?.selected,
          "text-muted-foreground opacity-50": modifiers?.disabled,
          "text-accent-foreground": modifiers?.today,
        },
        className
      )}
      {...props}
    >
      {day.getDate()}
    </Button>
  )
}

// New component: CardTitle
export interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = "h3", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

export { Button, buttonVariants, CalendarDayButton, CardTitle }
```
