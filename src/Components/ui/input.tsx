import * as React from 'react'

import { cn } from '@/Util'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={cn(
            'flex h-10 w-full border-b-2 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <span className='h-[1ch] w-full text-xs text-red-700'>
          {error}fkdkdsjflkdsjaklfjkj
        </span>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
