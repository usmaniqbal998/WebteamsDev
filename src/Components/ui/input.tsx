import * as React from 'react'

import { cn } from '@/Util'
import { FieldErrors } from 'react-hook-form'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: FieldErrors<Record<string, any>>
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={cn(
            'flex h-10 autofill:bg-black autofill:text-white w-full border-b-2 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />

        <span className='mt-2 block h-[1ch] min-h-[1ch] w-full text-xs text-red-600'>
          {error?.[props.name || '']?.message?.toString()}
        </span>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
