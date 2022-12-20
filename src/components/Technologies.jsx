import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Section from './organisms/Section'
import Typography from './atoms/Text'

const Technologies = () => {
  return (
    <Section>
      <div className="text-center">
        <Typography variant="h4" align="center">
          Technologies
        </Typography>
        <div className="mx-auto mt-5 flex max-w-3xl flex-1 flex-wrap items-center justify-center gap-10 md:mt-10 lg:gap-20">
          <StaticImage
            placeholder="blurred"
            height={120}
            src="../images/technologies/aws.png"
            alt="aws"
          />
          <StaticImage
            placeholder="blurred"
            height={120}
            src="../images/technologies/react-native.png"
            alt="react-native"
          />
          <StaticImage
            placeholder="blurred"
            height={120}
            src="../images/technologies/flutter.png"
            alt="flutter"
          />
          <StaticImage
            placeholder="blurred"
            height={120}
            src="../images/technologies/graphql.png"
            alt="graphql"
          />
          <StaticImage
            placeholder="blurred"
            height={120}
            src="../images/technologies/python.png"
            alt="python"
          />
        </div>
      </div>
    </Section>
  )
}

export default Technologies
