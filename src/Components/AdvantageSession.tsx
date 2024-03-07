import session2 from '@/assets/picksession2.svg'
import Image from 'next/image'
import { HomeCard } from './HomeCard'

export function AdvantageSession() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-9 flex items-end gap-16 px-44'>
        <h2 className='text-nowrap text-6xl'>
          Unlock expert <br /> guidance <br /> across your <br /> product
          lifecycle
        </h2>
        <p className='w-96 text-xs leading-relaxed text-neutral-300'>
          Join 100+ Technology Companies that went beyond their goals with us.
          Whether you are a fortune 500 or a startup - we give you top-notch
          Product Managers and <br />
          Development Squads with relevant experience in your niche to help you
          succeed. You can scale these dedicated squads up and down anytime.
        </p>
      </div>
      <Image className='mb-16' src={session2} alt='pick session2' />
      <div className='mb-12 flex items-end gap-16 px-44'>
        <h2 className='text-nowrap text-6xl'>
          Join 98% of SMEs, <br />
          startups, and <br /> scale-ups in <br />
          choosing us
        </h2>
        <p className=' w-96 text-xs leading-relaxed text-neutral-300'>
          Experience the enduring partnership our clients enjoy, with an average
          tenure exceeding 3 years. <br />
          Our commitment to long-term relationships is evident in the continuous
          presence of previous clients <br />
          in our repeat cycle, showcasing the trust and satisfaction they
          consistently find in our services.
        </p>
      </div>
      <div className='flex min-w-full flex-wrap items-center justify-center gap-5 '>
        <HomeCard title='Top In-House Teams'>
          We offer top 1% in-house development squads. We do all the heavy
          lifting of making your product scalable with the best development
          processes.
        </HomeCard>
        <HomeCard title='Agile on Steroids'>
          We provide cross-functional Agile teams that are self-organising,
          adapting to your business needs, taking ownership, and delivering to
          their full potential.
        </HomeCard>
        <HomeCard title='Complete Transparency '>
          This continuous knowledge transfer is a guarantee that the final
          product will be handed over without unnecessary stages of knowledge
          and documentation.
        </HomeCard>
        <HomeCard title='Team Synergy'>
          All team members from our core developers to Product Managers and
          CTO’s have years of experience in different niches and together they
          bring a lot to the table.
        </HomeCard>
      </div>
    </div>
  )
}

// flex-wrap
