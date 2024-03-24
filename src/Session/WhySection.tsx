import Image from 'next/image'
import group1 from '@/assets/whysection/Group1.svg'
import group2 from '@/assets/whysection/Group2icon.svg'
import group3 from '@/assets/whysection/group3.svg'
import group4 from '@/assets/whysection/Group4.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type WhySectionProps = {
  question: string
  reasons: {
    image: StaticImport
    name: string
    text: string
  }[]
}

export function WhySection(props: WhySectionProps) {
  return (
    <div className='flex flex-col gap-16'>
      <h2 className='w-4/6 text-8xl'>{props.question}</h2>
      <div className='grid grid-cols-2 gap-10'>
        {props.reasons.map(reason => (
          <div key={reason.name} className='flex flex-col gap-3'>
            <Image src={reason.image} alt='icongroup1' />
            <span>{reason.name}</span>
            <p className='text-neutral-300'> {reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
