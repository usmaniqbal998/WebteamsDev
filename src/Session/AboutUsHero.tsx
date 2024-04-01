import Image from 'next/image'
import IconAboutHero from '@/assets/iconAboutHero.svg'
import { HeroSideBar } from '@/Components/HeroSideBar'

export function AboutUsHero() {
  return (
    <div className='flex max-w-full flex-col items-center'>
      <div
        className=' flex w-screen min-w-[100vw] flex-col items-center justify-center bg-zinc-800 py-52 text-center text-[64px] leading-[110%] sm:py-8'
        id='about-brief'
      >
        <span className='px-64 sm:px-0 sm:text-4xl sm:leading-tight'>
          We are the <br className='hidden sm:block' />{' '}
          <mark className='text-green-500'>fastest growing </mark>
          <br className='sm:hidden' />
          digital consultancy in Europe <br className='sm:hidden' /> and the
          North America
        </span>
        <button className='mt-9 h-14 w-40 rounded-full bg-white text-base font-semibold text-black'>
          Let&apos;s discuss
        </button>
      </div>
      <div className='relative mt-12 flex flex-col gap-12 leading-loose sm:mt-0 sm:items-center sm:gap-0'>
        <HeroSideBar
          className='absolute -left-40 top-20 gap-28 sm:static sm:top-0'
          tags={[
            { display: 'Brief', id: 'about-brief' },
            { display: 'Who', id: 'about-who' },
            { display: 'Values', id: 'about-values' }
          ]}
        />
        <span className='self-start text-8xl sm:text-4xl' id='about-who'>
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
      <div className='mt-12 flex items-start justify-center gap-16 sm:max-w-full'>
        <Image src={IconAboutHero} alt='img' className='sm:h-auto sm:w-36' />
        <div className='flex flex-col items-start gap-16 leading-loose sm:self-end'>
          <span className='text-4xl'>Who do we help? </span>
          <p className='sm:hidden'>
            Companies that rely on technology for business growth. Our clients
            see us as a long-term strategic partner and trusted adviser for
            product design, development, DevOps, and cloud computing work.
          </p>
          <button className='mt-9 h-14 w-40 rounded-full bg-white text-lg font-semibold text-black sm:hidden'>
            Lets discuss
          </button>
        </div>
      </div>
      <p className='hidden sm:mt-4 sm:block sm:leading-relaxed'>
        Companies that rely on technology for business growth. Our clients see
        us as a long-term strategic partner and trusted adviser for product
        design, development, DevOps, and cloud computing work.
      </p>
      <button className='mt-4 hidden h-14 w-40 self-start rounded-full bg-white text-lg font-semibold text-black sm:block'>
        Lets discuss
      </button>
    </div>
  )
}
