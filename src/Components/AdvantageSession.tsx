import session2 from '@/assets/picksession2.png'
import Image from 'next/image'
import { HomeCard } from '@/components/Homecards'
import { cn } from '@/Util'

type HomeCard = {
  title: Exclude<React.ReactNode, boolean | null | undefined>
  children: string
}

const homeCards: HomeCard[] = [
  {
    title: (
      <>
        Top <mark className='text-[#BACAFE]'>In-House</mark> Teams
      </>
    ),
    children:
      'We offer top 1% in-house development squads. We do all the heavy lifting of making your product scalable with the best development processes.'
  },
  {
    title: (
      <>
        <mark className='text-[#A3D9A1]'>Agile</mark> on Steroids
      </>
    ),
    children:
      'We provide cross-functional Agile teams that are self-organising, adapting to your business needs, taking ownership, and delivering to their full potential.'
  },
  {
    title: (
      <>
        Complete <mark className='text-[#DDBCFD]'>Transparency</mark>
      </>
    ),
    children:
      'This continuous knowledge transfer is a guarantee that the final product will be handed over without unnecessary stages of knowledge and documentation.'
  },
  {
    title: (
      <>
        Team <mark className='text-[#B6D3FF]'>Synergy</mark>
      </>
    ),
    children:
      'All team members from our core developers to Product Managers and CTO’s have years of experience in different niches and together they bring a lot to the table.'
  }
]

export function AdvantageSession(props: { className?: string }) {
  return (
    <div
      className={cn(
        'flex w-full max-w-full flex-col items-center',
        props.className
      )}
    >
      <div className='mb-12 grid w-full grid-cols-11 items-end px-32 sm:mb-0 sm:grid-cols-1 sm:grid-rows-2 sm:flex-col sm:items-start sm:gap-6 sm:px-2'>
        <h2 className='col-span-7 text-8xl leading-[1.1] 2xl:text-6xl lg:text-5xl sm:col-span-1 sm:text-4xl'>
          Unlock expert <br className='sm:hidden' /> guidance
          <br className='sm:hidden' /> across your
          <br /> product lifecycle
        </h2>
        <p className='col-span-4 col-start-8 leading-loose text-neutral-400 sm:col-span-1 sm:text-sm'>
          Join 100+ Technology Companies that went beyond their goals with us.
          Whether you are a fortune 500 or a startup - we give you top-notch
          Product Managers and <br className='sm:hidden' />
          Development Squads with relevant experience in your niche to help you
          succeed. You can scale these dedicated squads up and down anytime.
        </p>
      </div>
      <Image
        className='mb-44 h-[720px] w-auto sm:mb-10 sm:h-auto'
        src={session2}
        alt='pick session2'
        priority
      />
      <div className='mb-12 grid w-full grid-cols-11 items-end px-32 sm:mb-0 sm:grid-cols-1 sm:grid-rows-2 sm:flex-col sm:items-start sm:gap-6 sm:px-2'>
        <h2 className='col-span-7 text-8xl 2xl:text-6xl xl:text-5xl sm:col-span-1 sm:text-wrap sm:text-4xl'>
          Join 98% of SMEs, <br />
          startups, and <br /> scale-ups in <br />
          choosing us
        </h2>
        <p className=' col-span-4 col-start-8 leading-relaxed text-neutral-400 sm:col-span-1 sm:text-sm'>
          Experience the enduring partnership our clients enjoy, with an average
          tenure exceeding 3 years. <br />
          Our commitment to long-term relationships is evident in the continuous
          presence of previous clients in our repeat cycle, showcasing the trust
          and satisfaction they consistently find in our services.
        </p>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-5 sm:grid-cols-1 sm:grid-rows-none'>
        {homeCards.map(homeCard => (
          <HomeCard key={homeCard.title.toString()} {...homeCard} />
        ))}
      </div>
    </div>
  )
}

// flex-wrap
