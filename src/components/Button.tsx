import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-body font-semibold',
    'transition-transform transition-opacity duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'cursor-pointer select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gold-gradient text-brand-dark',
          'shadow-warm-md',
          'hover:brightness-105',
          'active:scale-[0.97]',
        ],
        secondary: [
          'bg-brand-primary text-white',
          'shadow-brand-md',
          'hover:bg-brand-primary-light',
          'active:scale-[0.97]',
        ],
        outline: [
          'border-2 border-brand-primary text-brand-primary bg-transparent',
          'hover:bg-brand-primary hover:text-white',
          'active:scale-[0.97]',
        ],
        'outline-white': [
          'border-2 border-white/60 text-white bg-transparent',
          'hover:bg-white/15 hover:border-white',
          'active:scale-[0.97]',
        ],
        ghost: [
          'text-brand-primary bg-transparent',
          'hover:bg-brand-primary/10',
          'active:scale-[0.97]',
        ],
        danger: [
          'bg-red-600 text-white',
          'hover:bg-red-700',
          'active:scale-[0.97]',
        ],
      },
      size: {
        sm: 'h-9  px-4  text-sm  rounded-lg',
        md: 'h-11 px-6  text-base rounded-xl',
        lg: 'h-14 px-8  text-lg  rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
)

Button.displayName = 'Button'

export { Button, buttonVariants }
export default Button
