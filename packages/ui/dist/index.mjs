// components/button.tsx
import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'

// utils.ts
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// components/button.tsx
import { jsx } from 'react/jsx-runtime'
var buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
var Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  return /* @__PURE__ */ jsx('button', {
    className: cn(buttonVariants({ variant, size, className })),
    ref,
    ...props,
  })
})
Button.displayName = 'Button'

// components/card.tsx
import { forwardRef as forwardRef2 } from 'react'
import { jsx as jsx2 } from 'react/jsx-runtime'
var Card = forwardRef2(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx2('div', {
    ref,
    className: cn('bg-card text-card-foreground rounded-xl border shadow', className),
    ...props,
  })
)
Card.displayName = 'Card'
var CardHeader = forwardRef2(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx2('div', {
    ref,
    className: cn('flex flex-col space-y-1.5 p-6', className),
    ...props,
  })
)
CardHeader.displayName = 'CardHeader'
var CardTitle = forwardRef2(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx2('h3', {
    ref,
    className: cn('font-semibold leading-none tracking-tight', className),
    ...props,
  })
)
CardTitle.displayName = 'CardTitle'
var CardDescription = forwardRef2(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx2('p', {
    ref,
    className: cn('text-muted-foreground text-sm', className),
    ...props,
  })
)
CardDescription.displayName = 'CardDescription'
var CardContent = forwardRef2(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx2('div', { ref, className: cn('p-6 pt-0', className), ...props })
)
CardContent.displayName = 'CardContent'
var CardFooter = forwardRef2(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx2('div', {
    ref,
    className: cn('flex items-center p-6 pt-0', className),
    ...props,
  })
)
CardFooter.displayName = 'CardFooter'
export {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  buttonVariants,
  cn,
}
