import { cn } from '@/Util'
import { ReactNode } from 'react'

export type Step = {
  subtitle: string
  text: string
}

type OurDesignCardProps = {
  title: ReactNode
  steps: Step[]
  className?: string
}

export function OurDesignCard(props: OurDesignCardProps) {
  return (
    <div
      className={cn(
        ' flex w-screen flex-col gap-10 bg-zinc-900 px-72 ',
        props.className
      )}
    >
      <h2 className='mt-12 text-8xl '>{props.title}</h2>
      <div className=' flex w-full flex-row items-start justify-between gap-4'>
        {props.steps.map((step, index) => (
          <>
            <div className='flex w-36 flex-col gap-2'>
              <span className='flex size-11 items-center justify-center rounded-full bg-green-300 text-xl text-black'>
                {index + 1}
              </span>
              <span className='text-xl'>{step.subtitle} </span>
              <p className=' text-stone-400'>{step.text}</p>
            </div>
            <div className='h-full w-[1px] bg-white last-of-type:hidden'></div>
          </>
        ))}
      </div>
    </div>
  )
}
