import { DesignHero } from '@/Session/DesignHero'
import { Reason, WhySection } from '@/Session/WhySection'
import reasonIcon1 from '@/assets/DesignPage/reason-icon1.svg'
import reasonIcon2 from '@/assets/DesignPage/reason-icon2.svg'
import reasonIcon3 from '@/assets/DesignPage/reason-icon3.svg'
import reasonIcon4 from '@/assets/DesignPage/reason-icon4.svg'
import { OurDesignCard, Step } from '@/Components/OurDesignCard'

const reasons: Reason[] = [
  {
    image: reasonIcon1,
    name: 'Brand Oriented Design',
    text: 'Our designs speak for your brand. We design with a strategic mindset and focuses on continually creating, developing, and maintaining brand identity across consumer and stakeholder. Every aspect of our design depicts your brand. '
  },
  {
    image: reasonIcon2,
    name: 'User-Centric Design',
    text: 'We never leave your users behind. We have an Iterative Design Process in which designers focus on the users and their needs in each phase of the process. With this approach, your users will have more flexibility and options on your platform giving you a competitive edge.'
  },
  {
    image: reasonIcon3,
    name: 'Accessibility & Usability ',
    text: 'While designing we continuously ensure that all parts of our designs follow accessibility standards and usability processes. We ensure that our designs are usable by people with disability.'
  },
  {
    image: reasonIcon4,
    name: 'Higher Conversion Rate ',
    text: 'Maximise engagement with clear, compelling calls-to-action: Drive your conversion rate sky-high.'
  }
]

const steps: Step[] = [
  {
    subtitle: 'Empathize',
    text: `Move around the problem what the user says, thinks, and feels.
    Create persona of the user.`
  },
  {
    subtitle: 'Define',
    text: `Write as many solutions by working on hypothesis statements and put research to get the best of it. .`
  },
  {
    subtitle: 'Ideate',
    text: ` Create user stories or work on exercises like crazy eights and
    move to design a Low-fidelity-Wireframe.`
  },
  {
    subtitle: 'Prototype',
    text: `Here colors are involved 
    on a High-fidelity design. Working on brand guidelines creating a unique brand identity.`
  },
  {
    subtitle: 'Prototype',
    text: `Here colors are involved 
    on a High-fidelity design. Working on brand guidelines creating a unique brand identity.`
  }
]

export default function Design() {
  return (
    <div
      className='flex max-w-full flex-col items-center justify-start px-32 sm:px-0'
      id='design-projects'
    >
      <DesignHero />
      <WhySection
        id='design-why'
        question={
          <>
            Why you should <br /> hire our design <br /> team?
          </>
        }
        reasons={reasons}
        className='mb-20'
      />
      <OurDesignCard
        id='design-process'
        title={
          <>
            Our design <br /> process
          </>
        }
        steps={steps}
      />
    </div>
  )
}
