import { Code } from '@/Session/Code'
import { Hero } from '@/Session/Hero'
import { Explore } from '@/Session/Explorer'
import { FaqSession } from '@/Session/FaqSession'
import { RecentWork } from '@/Session/RecentWork'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start gap-44'>
      <Hero />
      <Code />
      <RecentWork />
      <FaqSession />
      <Explore />
    </div>
  )
}
