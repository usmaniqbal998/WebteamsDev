import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { cn } from '@/Util'
import Link from 'next/link'

type CaseStudyCardProps = {
  image: string | StaticImport
  name: string
  text: string
  className?: string
  href: string
}

export function CaseStudyCard(props: CaseStudyCardProps) {
  return (
    <div className={cn('flex w-min flex-col sm:w-full', props.className)}>
      <div className='mb-6 flex h-[388px] w-[451px] justify-center rounded-lg border bg-neutral-200 sm:size-[42vw]'>
        <Image src={props.image} alt='grouphero' width={1000} />
      </div>
      <span className=''>{props.name}</span>
      <span className='mt-1 text-neutral-300'>{props.text}</span>
      <Link
        href={props.href}
        className='mt-2 flex h-9 w-20 items-center justify-center rounded-full border-2 border-green-300 p-3 text-xs font-bold transition-colors duration-150 hover:border-[#4CAF50] hover:bg-[#4CAF50] hover:text-black'
      >
        Preview
      </Link>
    </div>
  )
}
