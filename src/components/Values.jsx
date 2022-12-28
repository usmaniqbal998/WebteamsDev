import React from 'react'
import InfoBox from './organisms/InfoBox'
import Typography from './atoms/Text'
import {
  EvolveIcon,
  FairPlayIcon,
  GrowthIcon,
  OpennessIcon,
  PeopleIcon,
} from '../utils/icons'

const ValuesClass =
  'flex flex-col items-start md:items-center justify-between rounded-md bg-[#282828] gap-6 md:gap-10 p-4 md:flex-row md:p-10 text-white'

const Values = ({ id = 'about' }) => {
  return (
    <div id={`process-${id}`} className="pt-16 md:pt-20 lg:pt-24">
      <Typography variant="h2" className="pb-4 lg:pb-8 ">
        Our Core Values
      </Typography>
      <Typography variant="p">
        During this journey, we learned a lot and we are still learning. we
        think of these values as important for our culture and achieving an
        individual sense of accomplishment
      </Typography>
      <div className="mt-8 grid grid-cols-1 gap-y-6 md:mt-8 md:gap-y-10 ">
        <InfoBox
          className={ValuesClass}
          title="People"
          icon={<PeopleIcon />}
          content="People working at the WebTeams are the greatest asset that we have. they are no ordinary minds and its them who we owe to who we are today. We work with them and for them to make them feel appreciated and satisfied."
        />
        <InfoBox
          className={ValuesClass}
          title="Growth"
          icon={<GrowthIcon />}
          content="We never settle for only good. We take ownership of the work we do and we want to go beyond expectations and desired results."
        />
        <InfoBox
          className={ValuesClass}
          title="Evolve"
          icon={<EvolveIcon />}
          content="To ensure success for our clients we are continuously learning new skills and expanding our knowledge by doing new certifications and learning from new workshops. Our team is always hustling to be better."
        />
        <InfoBox
          className={ValuesClass}
          title="Fair Play"
          icon={<FairPlayIcon />}
          content="We believe in Fair play and believe that all parties involved in something should be praised well. At the end of the day our clients get what they want and our colleagues get adequate praise for the compensation of their skills.
"
        />
        <InfoBox
          className={ValuesClass}
          title="Openness"
          icon={<OpennessIcon />}
          content="We are always open to new ideas and challenges that await us. The openness to one another drive our client and colleagues relations and help us to be more closer to success."
        />
      </div>
    </div>
  )
}

export default Values
