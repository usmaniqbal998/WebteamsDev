import Image from 'next/image'
import flowerIcon from '@/assets/flower-icon.svg'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import studyCase1 from '@/assets/study-case/study-case-1.svg'
import studyCase2 from '@/assets/study-case/study-case-2.svg'
import studyCase3 from '@/assets/study-case/study-case-3.svg'
import studyCase4 from '@/assets/study-case/study-case-4.svg'
import { HeroSideBar } from '@/components/HeroSideBar'
import Link from 'next/link'

export function DesignHero() {
  return (
    <div className='flex min-w-full max-w-full flex-col items-center'>
      <h1 className='text-9xl sm:text-6xl'>Design</h1>
      <Image
        className='mt-6 sm:h-14'
        src={flowerIcon}
        alt='flowericon'
        height={96}
      />
      <span className='mt-14 text-center text-3xl sm:mt-4 sm:px-6 sm:text-xl'>
        Looking for award-winning design teams? look no
        <br className='sm:hidden' /> more!
      </span>
      <span className='mt-12 text-lg sm:text-sm'>
        We Craft delightful UX for your digital products
      </span>
      <Link
        href='/contact'
        className='mt-5 flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black'
      >
        Let&apos;s discuss
      </Link>
      <h2 className='relative mt-8 self-start text-8xl sm:flex sm:w-full sm:flex-col-reverse sm:text-4xl'>
        Case <br /> studies
        <HeroSideBar
          style={{
            left: '-160px ',
            top: '100px '
          }}
          className='absolute z-50 sm:static sm:left-0 sm:top-0 sm:self-center'
          tags={[
            { id: 'design-projects', display: 'Projects' },
            { id: 'design-why', display: 'Why' },
            { id: 'design-process', display: 'Process' }
          ]}
        />
      </h2>

      <div
        className=' mt-8 grid w-full grid-cols-2 grid-rows-2 items-start gap-x-80 gap-y-10 overflow-visible sm:gap-2'
        id='design-projects'
      >
        <CaseStudyCard
          name='Risk Management Dashboard'
          text='Web application for assessing risks, providing essential insights to avoid potential problems.'
          href='/cases/risk'
          image={studyCase1}
        />
        <CaseStudyCard
          name='Ilmiya Edtech Platform'
          text='Ilmiya serves as an EdTech platform that enables educators to design courses and educational games.'
          href='/cases/ilmiya'
          image={studyCase2}
        />
        <CaseStudyCard
          name='Baton Team Management'
          text='Baton team management functions as a component within the broader Baton tool.'
          href='/cases/baton'
          image={studyCase3}
        />
        <CaseStudyCard
          name='Office 20 Dashboard'
          text='A dashboard designed for an owner to manage their business and all subsidiary branches'
          href='/cases/office'
          image={studyCase4}
        />
      </div>
    </div>
  )
}
