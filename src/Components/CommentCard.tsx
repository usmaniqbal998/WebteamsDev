import Image from 'next/image'
import Person1 from '@/assets/person/person1.png'
import { ReactNode } from 'react'

type ImageSrc = Parameters<typeof Image>[0]['src']

type CommentedCardProps = {
  comment: string
  name: ReactNode
  photo: ImageSrc
}

export function CommentCard(props: CommentedCardProps) {
  return (
    <div className='flex w-72 flex-col gap-5 rounded-3xl border-2 border-solid px-8 py-10 text-white'>
      <div className='flex items-center justify-start gap-3'>
        <Image
          className='size-6 rounded-full'
          src={props.photo}
          alt='person 1'
        />
        <div>{props.name}</div>
      </div>
      <span className='text-neutral-400'>{props.comment}</span>
    </div>
  )
}
