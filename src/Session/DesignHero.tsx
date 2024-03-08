import Image from 'next/image'
import flowerIcon from '@/assets/flower-icon.svg'
import { CaseStudyCard } from '@/Components/CaseStudyCard'
import studyCase1 from '@/assets/study-case/study-case-1.svg'
import studyCase2 from '@/assets/study-case/study-case-2.svg'
import studyCase3 from '@/assets/study-case/study-case-3.svg'
import studyCase4 from '@/assets/study-case/study-case-4.svg'
import { HeroSideBar } from '@/Components/HeroSideBar'

export function DesignHero() {
  return (
    <div className=' flex flex-col items-center px-[345px] '>
      <h1 className=' text-9xl'>Design</h1>
      <Image className='mt-6' src={flowerIcon} alt='flowericon' />
      <span className='mt-14 text-center text-3xl'>
        Looking for award-winning design teams? look no <br /> more!
      </span>
      <span className='mt-12 text-lg'>
        We Craft delightful UX for your digital products
      </span>
      <button className='mt-5 rounded-full bg-white px-6 py-3 text-sm font-bold text-black'>
        Let’s discuss
      </button>
      <h2 className='mt-8 self-start text-8xl'>
        Case <br /> studies
      </h2>
      <div className=' relative mt-8 flex flex-wrap items-center justify-between gap-y-10'>
        <HeroSideBar
          className='absolute -left-40 -top-32 z-50'
          tags={['Projects', 'Why', 'Process']}
          highlight='Projects'
        />
        <CaseStudyCard
          name='Risk Management Dashboard'
          text='Web application for assessing risks, providing essential insights to avoid potential problems.'
          image={studyCase1}
        />
        <CaseStudyCard
          name='Ilmiya Edtech Platform'
          text='Ilmiya serves as an EdTech platform that enables educators to design courses and educational games.'
          image={studyCase2}
        />
        <CaseStudyCard
          name='Baton Team Management'
          text='Baton team management functions as a component within the broader Baton tool.'
          image={studyCase3}
        />
        <CaseStudyCard
          name='Office 20 Dashboard'
          text='A dashboard designed for an owner to manage their business and all subsidiary branches'
          image={studyCase4}
        />
      </div>
    </div>
  )
}
