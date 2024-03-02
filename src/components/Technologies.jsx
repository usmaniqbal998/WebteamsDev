import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Section from './organisms/Section'
import Typography from './atoms/Text'
import {
  AWSIcon,
  FlutterIcon,
  GraphqlIcon,
  PythonIcon,
  ReactNativeIcon,
} from '../utils/icons'

const Technologies = () => {
  return (
    <Section>
      <div className="text-center">
        <Typography variant="h4" align="center">
          Technologies
        </Typography>
        <div className="mx-auto mt-5 flex max-w-3xl flex-1 flex-wrap items-center justify-center gap-8 md:mt-10 lg:gap-16">
          <AWSIcon className="mx-auto h-6 w-10 md:h-14 md:w-24" />
          <ReactNativeIcon className="mx-auto h-6 w-36 md:h-14 md:w-[350px]" />
          <FlutterIcon className="mx-auto h-6 w-14 md:h-14 md:w-36" />
          <GraphqlIcon className="mx-auto h-6 w-20 md:h-14 md:w-56" />
          <PythonIcon className="mx-auto h-6 w-24 md:h-14 md:w-52" />
        </div>
      </div>
    </Section>
  )
}

export default Technologies
