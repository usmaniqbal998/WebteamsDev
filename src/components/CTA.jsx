import React from 'react'
import Section from './organisms/Section'
import Typography from './atoms/Text'
import { ArrowForward } from '../utils/icons'
import { navigate } from 'gatsby'

const CTA = () => {
  return (
    <Section>
      <div className="linearGradient mt-10 flex  items-center justify-between rounded-3xl py-10  px-5 md:mt-20 lg:py-20 lg:px-14">
        <Typography
          variant="h2"
          className="font-emphasis text-4xl font-bold  lg:text-[80px] lg:leading-[110px]"
        >
          Get Project Estimation
        </Typography>
        <div>
          <button
            type="button"
            className="rounded-xl bg-white p-3 text-secondary-400 transition-all duration-300 hover:bg-[#121212] hover:text-white md:p-5"
            onClick={() => {
              navigate('/contact')
            }}
          >
            <ArrowForward />
          </button>
        </div>
      </div>
    </Section>
  )
}

export default CTA
