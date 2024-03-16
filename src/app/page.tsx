import { Code } from '@/Session/Code'
import { Hero } from '@/Session/Hero'
import { Explore } from '@/Session/Explorer'
import { FaqSession } from '@/Session/FaqSession'
import { RecentWork } from '@/Session/RecentWork'
import { AdvantageSession } from '@/Components/AdvantageSession'
import { Reviews } from '@/Session/Reviews'

export default function Home() {
  return (
    <div className='flex max-w-full flex-col items-center justify-start sm:gap-14'>
      <Hero className='mt-40 sm:mt-10' />
      <AdvantageSession className='mt-36' />
      <Code className='mt-36' />
      <RecentWork className='mt-40' />
      <Reviews className='mt-40' />
      <FaqSession className='mt-20' />
      <Explore className='mb-20 mt-32 sm:mb-10' />
    </div>
  )
}
