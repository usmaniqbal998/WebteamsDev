import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Section from './organisms/Section'
import Typography from './atoms/Text'
import {
  AmazonIcon,
  BynderIcon,
  ShopifyIcon,
  SpotifyIcon,
} from '../utils/icons'

const StaffWorked = () => {
  return (
    <Section>
      <div className=" mx-auto max-w-5xl text-center">
        <Typography variant="h4" align="center">
          Our Staff works here before
        </Typography>
        <div className="xs:gap-20 mt-5 grid grid-cols-2 items-center justify-center gap-8 sm:gap-28 md:mt-10 md:grid-cols-4 lg:gap-x-40">
          <ShopifyIcon className="order-1 mx-auto h-6 w-24 md:h-10 md:w-40" />
          <BynderIcon className="order-3 mx-auto h-6 w-24 md:order-2 md:h-10 md:w-40" />
          <AmazonIcon className="order-4 mx-auto h-6 w-24 md:order-3 md:h-10 md:w-40" />
          <SpotifyIcon className="order-2 mx-auto h-6 w-24 md:order-4 md:h-10 md:w-40" />
        </div>
      </div>
    </Section>
  )
}

export default StaffWorked
