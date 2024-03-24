import Image from 'next/image'
import mobiledev from '@/assets/mobiledev-image.svg'
import { HeroSideBar } from '@/Components/HeroSideBar'

export function MobileDevHero() {
  return (
    <div className='flex flex-col items-center text-center'>
      <h1 className='text-9xl'>Mobile App Development</h1>
      <span className='mt-16 text-3xl'>
        Grow your business with fully tailored MobileApps
      </span>
      <button className='mt-6 h-11 w-36 rounded-full border-white bg-white text-sm font-semibold text-black'>
        Lets discuss
      </button>
      <div className='relative mt-24 flex w-full flex-row justify-between'>
        <HeroSideBar
          className='absolute -left-40 top-11 gap-28'
          tags={['Brief', 'Why', 'Process']}
          highlight='Brief'
        />
        <h2 className='text-left text-8xl [&_mark]:text-green-500'>
          <mark className='font-semibold'>7</mark> weeks <br /> to get <br />{' '}
          ready <br />
          your MVP
        </h2>
        <Image src={mobiledev} alt='imagemobiledev' />
      </div>
      <p className='mt-10 px-2 text-left font-normal '>
        Choosing the right web development partner is very crucial for the
        success of your digital products. We offer highly technical developers
        and product managers that are involved in your development lifecycle
        from start to finish. We are not an ordinary web development team, every
        team member comes with an ownership mindset and brings a lot of passion
        and years of experience with them.
      </p>
    </div>
  )
}
