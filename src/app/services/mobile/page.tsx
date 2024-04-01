import { OurDesignCard, Step } from '@/Components/OurDesignCard'
import { ReactNativeAdvantages } from '@/Components/ReactNativeAdvantages'
import { MobileDevHero } from '@/Session/MobileDevHero'
import { Reason, WhySection } from '@/Session/WhySection'
import reasonIcon1 from '@/assets/MobilePage/reason-icon1.svg'
import reasonIcon2 from '@/assets/MobilePage/reason-icon2.svg'
import reasonIcon3 from '@/assets/MobilePage/reason-icon3.svg'
import reasonIcon4 from '@/assets/MobilePage/reason-icon4.svg'

const reasons: Reason[] = [
  {
    image: reasonIcon1,
    name: 'World-Class Product Team',
    text: 'We have Product Managers that are certified with CAPM and PMP certification and are always in touch with you working on development processes, gathering requirements, and managing developers. 90% of our backend developers and certified cloud practitioners.'
  },
  {
    image: reasonIcon2,
    name: 'Thorough Quality Assurance ',
    text: 'We never leave your users behind. We have an Iterative Design Process in which designers focus on the users and their needs in each phase of the process. With this approach, your users will have more flexibility and options on your platform giving you a competitive edge  .'
  },
  {
    image: reasonIcon3,
    name: 'Scalable Architecture',
    text: 'We develop a business-tailored scalable architecture for your web apps. We always design and develop with your product and user requirements in mind. our Certified AWS Architects ensure clarity, flexibility, resilience, and scalability in your infrastructure .'
  },
  {
    image: reasonIcon4,
    name: 'Completely Agile  ',
    text: 'Our Squads are completely agile and you can scale them up and down anytime based on your needs. We Offer Fast iterations & frequent releases and always keep you in the feedback loop so you never miss anything.'
  }
]

const steps: Step[] = [
  {
    subtitle: 'Planning',
    text: 'Before the actual development process, we organize the Project Planning Session. All our Project managers are Certified AgilePM and accredited with PMP certifications.'
  },
  {
    subtitle: 'Analysis & Design',
    text: 'The project is Analysed and our UI/UX Designers design wireframes and validate ideas with design and prototype screens on design tools..'
  },
  {
    subtitle: 'Development',
    text: 'In this phase, Our backend and Frontend Engineers based on UI/UX designs develop different modules of the application. We follow TDD approach so everything shipped is bulletproof.'
  },
  {
    subtitle: 'Testing',
    text: 'In this phase end-to-end testing is done and all user stories are validate and tickets are raised in case of issues.'
  },
  {
    subtitle: 'Deliver',
    text: 'If all things go well we finally deliver you everything. You are always the owner of all documents and code repositories.'
  }
]

export default function Mobile() {
  return (
    <div className='flex max-w-full flex-col items-center justify-start px-32 sm:px-0'>
      <MobileDevHero />
      <WhySection
        question={
          <>
            Why you should <br /> hire our <br /> Development <br /> Team?
          </>
        }
        reasons={reasons}
        id='mobile-why'
        className='mb-20'
      />
      <ReactNativeAdvantages />
      <OurDesignCard
        id='mobile-process'
        className='pb-4'
        title={
          <>
            Our development <br /> process
          </>
        }
        steps={steps}
      />
    </div>
  )
}
