import Image from 'next/image'
import AboutUs from '@/assets/AboutUs/people-icon.svg'
import { string } from 'zod'

type ValueCardProps = {
  image: string
  title: string
  text: string
}
export function ValueCard(props: ValueCardProps) {
  return (
    <div className='flex h-[23vh] w-full gap-10 rounded-none bg-neutral-800 p-16 leading-loose sm:gap-4 sm:p-2'>
      <Image src={props.image} alt='img' />
      <div className='flex flex-col justify-center gap-4 sm:gap-2'>
        <span className='text-xl font-medium sm:text-base'>{props.title}</span>
        <p className='text-xl leading-8 sm:text-sm'>{props.text}</p>
      </div>
    </div>
  )
}
