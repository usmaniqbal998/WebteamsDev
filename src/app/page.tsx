import { Code } from '@/Session/Code'
import { Hero } from '@/Session/Hero'
import { Explore } from '@/Session/Explorer'
import { FaqSession } from '@/Session/FaqSession'
import { RecentWork } from '@/Session/RecentWork'
import { AdvantageSession } from '@/Components/AdvantageSession'

export default function Home() {
  return (
    <div className='flex max-w-full flex-col items-center justify-start gap-44 sm:gap-14'>
      <Hero className='mt-20 sm:mt-10' />
      <AdvantageSession />
      <Code />
      <RecentWork />
      <FaqSession />
      <Explore className='sm:mb-10' />
    </div>
  )
}
