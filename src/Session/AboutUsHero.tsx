import Image from 'next/image'
import IconAboutHero from '@/assets/iconAboutHero.svg'
import { HeroSideBar } from '@/Components/HeroSideBar'

export function AboutUsHero() {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className=' flex h-[80vh] w-screen min-w-[100vw] flex-col items-center justify-center bg-zinc-800  text-center  text-8xl'>
        <span className='px-64 '>
          We are the <mark className='text-green-500'>fastest growing </mark>
          digital consultancy in Europe and the North America
        </span>
        <button className='mt-9 h-14 w-40 rounded-full bg-white text-lg font-semibold text-black'>
          Let&apos;s discuss
        </button>
      </div>
      <div className='relative mt-20 flex flex-col gap-12 px-96 leading-loose'>
        <HeroSideBar
          className='absolute left-52 top-20 gap-28'
          highlight='Brief'
          tags={['Brief', 'Who', 'Values']}
        />
        <span className=' text-8xl'>
          Our <br />
          story
        </span>
        <p className=' '>
          The founders of the company were friends who used to work as software
          developers and designers in different companies. They found that how
          business owners struggle in making the right technological decisions
          for their digital products and it&apos;s a hassle to onboard in-house
          development teams for many businesses.
        </p>
        <p>
          They started the company to address this issue by providing agile
          squads on fixed costs that can be scaled up and down according to the
          business requirement and offer these squads as strategic partners in
          development of digital product from start to finish.
        </p>
      </div>
      <div className='mt-12 flex items-start justify-center gap-16  px-96'>
        <Image src={IconAboutHero} alt='img' />
        <div className='flex flex-col items-start gap-16 leading-loose'>
          <span className='text-7xl'>Who do we help? </span>
          <p>
            Companies that rely on technology for business growth. Our clients
            see us as a long-term strategic partner and trusted adviser for
            product design, development, DevOps, and cloud computing work.
          </p>
          <button className='mt-9 h-14 w-40 rounded-full bg-white text-lg font-semibold text-black'>
            Lets discuss
          </button>
        </div>
      </div>
    </div>
  )
}
