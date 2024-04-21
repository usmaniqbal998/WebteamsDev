import { Code } from '@/Session/Code'
import { Hero } from '@/Session/Hero'
import { Explore } from '@/Session/Explorer'
import { FaqSession } from '@/Session/FaqSession'
import { RecentWork } from '@/Session/RecentWork'
import { AdvantageSession } from '@/components/AdvantageSession'
import { Reviews } from '@/Session/Reviews'

export default function Home() {
  return (
    <div className='flex max-w-full flex-col items-center justify-start'>
      <Hero className='mt-40 sm:mt-10' />
      <AdvantageSession className='mt-36 sm:mt-8' />
      <Code className='mt-36 sm:mt-10' />
      <RecentWork className='mt-20 sm:mt-10' />
      <Reviews className='mt-40 sm:mt-10' />
      <FaqSession className='mt-20 sm:mt-10' />
      <Explore className='mb-20 mt-32 sm:my-10' />
    </div>
  )
}
