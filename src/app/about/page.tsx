import { AboutUsHero } from '@/Session/AboutUsHero'
import { ValueSection } from '@/Session/ValueSection'

export default function About() {
  return (
    <div className='mb-32 flex max-w-full flex-col px-32 sm:gap-32 sm:px-0'>
      <AboutUsHero />
      <ValueSection />
    </div>
  )
}
