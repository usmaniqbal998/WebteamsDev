import { ReactNode } from 'react'

type HomeCardProps = {
  children: string
  title: ReactNode
}

export function HomeCard(props: HomeCardProps) {
  return (
    <div className='flex w-[33vw] flex-col items-center justify-center gap-5 rounded-[24px] border-2 px-[100px] py-8 sm:w-full sm:px-4'>
      <span className='text-center text-3xl text-white'>{props.title}</span>
      <span className='text-center leading-7 text-neutral-400'>
        {props.children}
      </span>
    </div>
  )
}
