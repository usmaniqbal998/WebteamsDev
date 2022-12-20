import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Section from './organisms/Section'
import Typography from './atoms/Text'

const StaffWorked = () => {
  return (
    <Section>
      <div className=" mx-auto max-w-5xl text-center">
        <Typography variant="h4" align="center">
          Our Staff works here before
        </Typography>
        <div className="xs:gap-20 mt-5 grid grid-cols-2 items-center justify-center gap-10 sm:gap-28 md:mt-10 md:grid-cols-4 lg:gap-x-40">
          <StaticImage
            placeholder="blurred"
            src={`../images/companies/shopify.png`}
            width={150}
            alt="shopify"
          />
          <StaticImage
            placeholder="blurred"
            src={`../images/companies/bynder.png`}
            width={150}
            alt="bynder"
          />
          <StaticImage
            placeholder="blurred"
            src={`../images/companies/amazon.png`}
            width={150}
            alt="amazon"
          />
          <StaticImage
            placeholder="blurred"
            src={`../images/companies/spotify.png`}
            width={150}
            alt="spotify"
          />
        </div>
      </div>
    </Section>
  )
}

export default StaffWorked
