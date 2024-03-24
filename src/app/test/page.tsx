import { HeroSideBar } from '@/Components/HeroSideBar'
import { OurDesignCard } from '@/Components/OurDesignCard'
import { DesignHero } from '@/Session/DesignHero'
import { Test } from '@/Session/test'

export default function test() {
  return (
    <OurDesignCard
      steps={[
        {
          subtitle: 'Empathize',
          text: 'Move around the problem what the user says, thinks, and feels.\n Create persona of the user.'
        },
        {
          subtitle: 'Define',
          text: 'Write as many solutions by working on hypothesis statements and put research to get the best of it. '
        },
        {
          subtitle: 'Ideate',
          text: 'Write as many solutions by working on hypothesis statements and put research to get the best of it. '
        },
        {
          subtitle: 'Prototype',
          text: 'Here colors are involved on a High-fidelity design. Working on brand guidelines creating a unique brand identity.'
        },
        {
          subtitle: 'Test',
          text: 'We are involved in design critique with stakeholders and our design team where we test design and make final micro-changes.  '
        }
      ]}
    />
  )
}
