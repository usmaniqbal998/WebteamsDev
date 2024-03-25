import { ReactNode, Fragment } from 'react'

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
    <div className='mt-14 flex w-screen flex-col gap-10 bg-zinc-900 px-72 sm:px-0'>
      <h2 className='mt-12 text-8xl sm:text-4xl'>{props.title}</h2>
      <div className=' flex w-full flex-row items-start justify-between gap-4 px-4 sm:grid sm:grid-cols-11 sm:gap-0 sm:gap-y-8'>
        {props.steps.map((step, index) => (
          <Fragment key={step.subtitle}>
            <div
              className='col-span-5 flex w-36 flex-col gap-2 sm:w-40'
              key={step.subtitle}
            >
              <span className='flex size-11 items-center justify-center rounded-full bg-green-300 text-xl text-black'>
                {index + 1}
              </span>
              <span className='text-xl'>{step.subtitle} </span>
              <p className=' text-stone-400 sm:text-sm sm:leading-loose'>
                {step.text}
              </p>
            </div>
            <div
              data-is-odd={index % 2 === 0}
              className='col-span-1 h-full w-[1px] bg-white last-of-type:hidden sm:data-[is-odd=false]:hidden'
              key={step.subtitle}
            ></div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
