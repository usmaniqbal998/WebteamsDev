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
    <div className='flex h-[23vh] w-full gap-10 rounded-none bg-neutral-800 p-16 leading-loose'>
      <Image src={props.image} alt='img' />
      <div className='flex flex-col justify-center gap-4'>
        <span className='text-xl font-medium'>{props.title}</span>
        <p className='text-xl leading-8'>{props.text}</p>
      </div>
    </div>
  )
}
