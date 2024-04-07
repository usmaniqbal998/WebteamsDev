'use client'

import { ReactNode, Fragment } from 'react'
import SVG from 'react-inlinesvg'
import lineSvg from '@/assets/vertical-line.svg'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'

export type Step = {
  subtitle: string
  text: string
}

type OurDesignCardProps = {
  id?: string
  title: ReactNode
  steps: Step[]
  className?: string
}

export function OurDesignCard(props: OurDesignCardProps) {
  return (
    <div
      className='flex w-screen flex-col gap-20 bg-zinc-900 px-72 pb-12 sm:px-4'
      id={props.id}
    >
      <h2 className='mt-12 text-8xl sm:text-4xl'>{props.title}</h2>
      <div className='flex w-full flex-row items-center justify-between gap-4 sm:grid sm:grid-cols-11 sm:gap-0 sm:gap-y-8'>
        {props.steps.map((step, index) => (
          <Fragment key={step.subtitle}>
            <div
              className='col-span-5 flex h-full w-40 flex-col items-start justify-start gap-2 sm:w-40'
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
            <SVG
              data-is-odd={index % 2 === 0}
              src={(lineSvg as StaticImageData).src}
              className='h-full scale-y-[1.2] last-of-type:hidden sm:scale-y-[1] sm:last-of-type:block sm:data-[is-odd=false]:hidden'
            ></SVG>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
