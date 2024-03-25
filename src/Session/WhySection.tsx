import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Reason = {
  image: StaticImport
  name: string
  text: string
}

type WhySectionProps = {
  question: string
  reasons: Reason[]
}

export function WhySection(props: WhySectionProps) {
  return (
    <div className='flex flex-col gap-16'>
      <h2 className='mt-24 w-5/6 text-8xl sm:w-4/6 sm:text-3xl'>
        {props.question}
      </h2>
      <div className='grid grid-cols-2 gap-10 sm:grid-cols-1'>
        {props.reasons.map(reason => (
          <div key={reason.name} className='flex flex-col gap-3'>
            <Image src={reason.image} alt='icongroup1' />
            <span>{reason.name}</span>
            <p className='text-neutral-400'> {reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
