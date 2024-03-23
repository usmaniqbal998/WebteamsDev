import { AdvantageSession } from '@/Components/AdvantageSession'
import { Hero } from '@/Session'
import { Reason, WhySection } from '@/Session/WhySection'
import group1 from '@/assets/whysection/Group1.svg'
import group2 from '@/assets/whysection/Group2icon.svg'
import group3 from '@/assets/whysection/group3.svg'
import group4 from '@/assets/whysection/Group4.svg'
import { title } from 'process'

const reasons: Reason[] = [
  {
    image: group1,
    title: 'Brand Oriented Design',
    text: 'Our designs speak for your brand. We design with a strategic mindset and focuses on continually creating, developing, and maintaining brand identity across consumer and stakeholder. Every aspect of our design depicts your brand. '
  },
  {
    image: group2,
    title: 'User-Centric Design',
    text: 'We never leave your users behind. We have an Iterative Design Process in which designers focus on the users and their needs in each phase of the process. With this approach, your users will have more flexibility and options on your platform giving you a competitive edge.'
  },
  {
    image: group3,
    title: 'Accessibility & Usability ',
    text: 'While designing we continuously ensure that all parts of our designs follow accessibility standards and usability processes. We ensure that our designs are usable by people with disability.'
  },
  {
    image: group4,
    title: 'Higher Conversion Rate ',
    text: 'Maximise engagement with clear, compelling calls-to-action: Drive your conversion rate sky-high.'
  }
]

export default function test() {
  return (
    <WhySection
      reasons={reasons}
      tittle='Why you should hire our design team?'
    />
  )
}
