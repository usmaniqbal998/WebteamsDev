import React from 'react'
import InfoBox from './organisms/InfoBox'
import { graphql, useStaticQuery } from 'gatsby'
import Typography from './atoms/Text'
import { AgileIcon, ExperienceIcon, TransparencyIcon } from '../utils/icons'

const CardClass =
  'rounded-xl bg-[#282828] py-8 px-5 flex flex-col gap-5 text-white'

const WhyChooseUs = () => {
  return (
    <section className="relative z-[0]">
      <div className="gradientBackground absolute inset-0 z-[-1] flex items-center justify-center"></div>
      <div className="container">
        <div className="py-8 md:py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8">
            <Typography variant="h3" align="center">
              Why{' '}
              <Typography variant="span" className="text-6xl md:text-8xl">
                98%{' '}
              </Typography>
              of SMEs, startups, and scale-ups choose us
            </Typography>
            <div className="mx-auto  max-w-2xl">
              <Typography variant="p" align="center">
                Most of our clients stay with us for longer than 3 years on
                average and we always have previous clients in our repeat cycle.
              </Typography>
            </div>
          </div>
          <div className="mg:gap-4 mt-10 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
            <InfoBox
              className={CardClass}
              icon={<AgileIcon />}
              title="Agile on Steroids"
              content="We provide cross-functional Agile teams that are self-organising, adapting to your business needs, taking ownership, and delivering to their full potential. You can scale up 
"
            />
            <InfoBox
              className={CardClass}
              icon={<TransparencyIcon />}
              title="Complete Transparency"
              content="This continuous knowledge transfer is a guarantee that the final product will be handed over without unnecessary stages of knowledge and documentation "
            />
            <InfoBox
              className={CardClass}
              icon={<ExperienceIcon />}
              title="Experienced Staff"
              content="All team members from our core developers to Product Managers and CTO’s have years of experience in different niches and together they bring a lot to the table
           "
            />
            <InfoBox
              className={CardClass}
              icon={
                <Typography
                  variant="span"
                  className="text-[40px] font-bold leading-[40px]  text-secondary-400"
                >
                  1%
                </Typography>
              }
              title="Top In-house Teams"
              content="We offer top 1% in-house development squads. We do all the heavy lifting of making your product scalable with the best development processes .
"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
