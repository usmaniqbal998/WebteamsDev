import { ContactUsButton } from '@/Components/ContactUsButton'
import FlowerIcon from '@/assets/flower.svg'
import Image from 'next/image'

export const Explore = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-24'>
      <Image height={160} src={FlowerIcon} alt={'Flower icon'} />
      <div className='flex flex-col items-center justify-center gap-10'>
        <p className='block text-center text-2xl'>
          Explore your personalized roadmap <br /> to cost-effective solutions
          with a single click
        </p>
        <span className='text-5xl'>Experience the difference</span>
        <ContactUsButton />
      </div>
    </div>
  )
}
