import Image from 'next/image'
import WebAppHero from '@/assets/webappdev-icon.svg'
import { HeroSideBar } from '@/Components/HeroSideBar'

export function WebAppDevHero() {
  return (
    <div className='flex w-full flex-col items-center justify-start'>
      <div className='flex w-full flex-col items-center justify-center'>
        <h1 className=' text-center text-9xl sm:text-6xl'>
          Web App <br /> Development
        </h1>
        <span className='mt-16 text-3xl sm:mt-4 sm:px-6 sm:text-center sm:text-xl'>
          Grow your business with fully tailored Web Apps
        </span>
        <button className='mt-4 h-11 w-36 rounded-full bg-white text-sm font-semibold text-black'>
          Let&#39;s discuss
        </button>
      </div>
      <div
        className='relative mb-8 mt-20 flex min-w-full items-end justify-start gap-20 leading-relaxed sm:flex-col sm:items-start sm:gap-4'
        id='web-brief'
      >
        <HeroSideBar
          className='absolute -left-28 top-9 gap-24 sm:static sm:left-0 sm:top-0 sm:w-full sm:justify-center'
          tags={[
            { display: 'Brief', id: 'web-brief' },
            { display: 'Why', id: 'web-display' },
            { display: 'Process', id: 'web-process' }
          ]}
        />
        <h2 className='text-7xl sm:w-3/6 sm:text-3xl'>
          Agile <br /> scalable <br /> team
        </h2>
        <p className='w-[600px] leading-relaxed text-neutral-400 sm:w-full'>
          Choosing the right web development partner is very crucial for the
          success of your digital products. We offer highly technical developers
          and product managers that are involved in your development lifecycle
          from start to finish. We are not an ordinary web development team,
          every team member comes with an ownership mindset and brings a lot of
          passion and years of experience with them.
        </p>
      </div>
      <Image src={WebAppHero} className='h-auto w-full' alt='iconWebApp' />
    </div>
  )
}
