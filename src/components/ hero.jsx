import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Button from './atoms/Button'
import ContentHeading from './molecules/ContentHeading'
import Text from './atoms/Text'
import WatchVideo from './molecules/WatchVideo'
import SocialLinks from './organisms/SocialLinks'

const Hero = () => {
  return (
    <div className="container">
      <div className="relative">
        <div className="absolute left-0 top-40 z-10 hidden lg:block">
          <SocialLinks vertical />
        </div>
      </div>
      <div className="my-[32px] mx-auto max-w-5xl md:px-10">
        <div className="relative z-[1]  flex flex-col items-center justify-center gap-10">
          <div className="absolute inset-0 z-[-1] flex items-center justify-center">
            <div className="gradientBackground my-auto h-1/2 w-full rounded-full bg-clip-content" />
          </div>
          <h1 className="text-center font-emphasis text-5xl  font-bold leading-[70px] text-white md:text-8xl md:leading-[117%]">
            <span className="font-sans">1</span>%<br />
            World Class
            <span className="gradientHeading block font-sans">
              Agile squads
            </span>
            for your Product
          </h1>
          <Text centre={true}>
            We are a one-stop-shop partner for all your product development. We
            provide dedicated top 1% agile development Squads that understand
            your business and infrastructure for your next billion-dollar idea.
          </Text>
          <Button name="GET PROJECT ESTIMATION" />
          <div className="z-10 mt-8 translate-x-4 px-4 md:translate-x-8">
            <StaticImage
              src="../images/hero1.svg"
              alt="hero-img"
              placeholder="blurred"
              width={250}
            />
          </div>
          <ContentHeading centre={true}>
            Speed up your development process with on-demand teams
          </ContentHeading>
          <WatchVideo />
        </div>
      </div>
    </div>
  )
}

export default Hero
