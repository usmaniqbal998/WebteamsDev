import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { cn } from '@/Util'

type CaseStudyCardProps = {
  image: string | StaticImport
  name: string
  text: string
  className?: string
}

export function CaseStudyCard(props: CaseStudyCardProps) {
  return (
    <div className={cn('flex w-min flex-col sm:w-full', props.className)}>
      <div className='mb-6 flex h-[388px] w-[451px] justify-center rounded-lg border bg-neutral-200 sm:h-[80vw] sm:w-full'>
        <Image src={props.image} alt='grouphero' width={451} />
      </div>
      <span className=''>{props.name}</span>
      <span className='mt-1 text-neutral-300'>{props.text}</span>
      <button className='mt-2 flex h-9 w-20 items-center justify-center rounded-full border-2 border-green-300 p-3 text-xs font-bold'>
        Preview
      </button>
    </div>
  )
}
