import { AboutUsHero } from '@/Session/AboutUsHero'
import { ValueSection } from '@/Session/ValueSection'

export default function About() {
  return (
    <div className='flex max-w-full flex-col px-32 sm:gap-16 sm:px-0'>
      <AboutUsHero />
      <ValueSection />
    </div>
  )
}
