import { ValueCard } from '@/Components/ValueCard'
import IconPeople from '@/assets/ValueCard/icon-people.svg'
import IconGrowth from '@/assets/ValueCard/icon-growth.svg'
import IconEnvolve from '@/assets/ValueCard/icon-envolve.svg'
import IconFair from '@/assets/ValueCard/icon-fair.svg'
import IconFairPlay from '@/assets/ValueCard/icon-fairplay.svg'

export function ValueSection() {
  return (
    <div className='flex flex-col gap-12' id='about-values'>
      <h2 className='text-8xl sm:text-4xl'>
        Our <br /> core values
      </h2>
      <p className='text-2xl leading-loose sm:hidden'>
        During this journey, we learned a lot and we are still learning. we
        think of these values as important for our culture and achieving an
        individual sense of accomplishment.
      </p>

      <div className='flex flex-col gap-16 sm:gap-4'>
        <ValueCard
          title='People'
          text='People working at the WebTeams are the greatest asset that we have. they are no ordinary minds and its them who we owe to who we are today. We work with them and for them to make them feel appreciated and satisfied.'
          image={IconPeople}
        />
        <ValueCard
          image={IconGrowth}
          title='Growth'
          text='We never settle for only good. We take ownership of the work we do and we want to go beyond expectations and desired results.'
        />
        <ValueCard
          image={IconEnvolve}
          text='To ensure success for our clients we are continuously learning new skills and expanding our knowledge by doing new certifications and learning from new workshops. Our team is always hustling to be better.'
          title='Evolve'
        />
        <ValueCard
          image={IconFair}
          title='Fair play'
          text='We believe in Fair play and believe that all parties involved in something should be praised well. At the end of the day our clients get what they want and our colleagues get adequate praise for the compensation of their skills.'
        />
        <ValueCard
          image={IconFairPlay}
          title='Fair play'
          text='We are always open to new ideas and challenges that await us. The openness to one another drive our client and colleagues relations and help us to be more closer to success.'
        />
      </div>
    </div>
  )
}
