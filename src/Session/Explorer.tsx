import { ContactUsButton } from '@/Components/ContactUsButton'
import { cn } from '@/Util'
import FlowerIcon from '@/assets/flower.svg'
import Image from 'next/image'

export const Explore = (props: { className?: string }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-24 sm:gap-4',
        props.className
      )}
    >
      <Image
        height={160}
        src={FlowerIcon}
        alt={'Flower icon'}
        className='sm:h-24 sm:w-auto'
      />
      <div className='flex flex-col items-center justify-center gap-10'>
        <p className='block text-center text-2xl sm:text-lg'>
          Explore your personalized roadmap <br className='sm:hidden' /> to
          cost-effective solutions with a single click
        </p>
        <span className='text-5xl sm:text-3xl'>Experience the difference</span>
        <ContactUsButton />
      </div>
    </div>
  )
}
