import React from 'react'
import Section from './organisms/Section'

const CTA = () => {
  return (
    <Section>
      <div className="linearGradient mt-10 flex  items-center justify-between rounded-3xl py-10  px-5 md:mt-20 lg:py-20 lg:px-14">
        <h2 className=" gap-5 font-emphasis text-4xl font-bold text-white  lg:text-[80px] lg:leading-[110px]">
          Get Project Estimation
        </h2>
        <div>
          <button
            type="button"
            className="rounded-xl bg-white p-3 text-secondary-400 transition-all duration-300 hover:bg-[#121212] hover:text-white md:p-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  )
}

export default CTA
