import Image from 'next/image'
import AboutUs from '@/assets/AboutUs/people-icon.svg'

export function ValueCard() {
  return (
    <div className='flex w-full gap-10 rounded-none bg-neutral-800 px-12 py-11 leading-loose'>
      <Image src={AboutUs} alt='img' />
      <div className=' flex flex-col justify-center'>
        <span className=' text-xl'>People</span>
        <p>
          People working at the WebTeams are the greatest asset that we have.
          they are no ordinary minds and its them who we owe to who we are
          today. We work with them and for them to make them feel appreciated
          and satisfied.
        </p>
      </div>
    </div>
  )
}
