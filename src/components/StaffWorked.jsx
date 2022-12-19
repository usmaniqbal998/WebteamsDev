import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Section from './organisms/Section'

const StaffWorked = () => {
  return (
    <Section>
      <div className=" mx-auto max-w-5xl text-center">
        <h4 className="text-[20px] font-bold leading-[200%] text-white">
          Our Staff works here before
        </h4>
        <div className="xs:gap-20 mt-5 grid grid-cols-2 items-center justify-center gap-10 sm:gap-28 md:mt-10 md:grid-cols-4 lg:gap-x-40">
          <StaticImage
            placeholder="blurred"
            src={`../images/companies/shopify.png`}
            width={180}
            alt="shopify"
          />
          <StaticImage
            placeholder="blurred"
            src={`../images/companies/bynder.png`}
            width={180}
            alt="bynder"
          />
          <StaticImage
            placeholder="blurred"
            s
            src={`../images/companies/amazon.png`}
            width={180}
            alt="amazon"
          />
          <StaticImage
            placeholder="blurred"
            src={`../images/companies/spotify.png`}
            width={180}
            alt="spotify"
          />
        </div>
      </div>
    </Section>
  )
}

export default StaffWorked
