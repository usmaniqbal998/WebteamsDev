import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/Util'

export type Reason = {
  image: StaticImport
  name: string
  text: string
}

type WhySectionProps = {
  question: ReactNode
  reasons: Reason[]
} & HTMLAttributes<HTMLDivElement>

export function WhySection({ className, ...props }: WhySectionProps) {
  return (
    <div className={cn('flex flex-col gap-16 sm:gap-4', className)} {...props}>
      <h2 className='mt-24 w-5/6 text-8xl sm:mt-10 sm:w-4/6 sm:text-3xl'>
        {props.question}
      </h2>
      <div className='grid grid-cols-2 gap-10 sm:grid-cols-1'>
        {props.reasons.map(reason => (
          <div key={reason.name} className='flex flex-col gap-3'>
            <Image src={reason.image} alt='icongroup1' />
            <span>{reason.name}</span>
            <p className='text-neutral-400'> {reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
