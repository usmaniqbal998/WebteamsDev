import React from 'react'
import ContentHeading from './molecules/ContentHeading'
import Text from './atoms/Text'
import InfoBox from './organisms/InfoBox'
import { graphql, useStaticQuery } from 'gatsby'

const CardClass =
  'rounded-xl bg-[#282828] py-8 px-5 flex flex-col gap-5 text-white'

const WhyChooseUs = () => {
  const data = useStaticQuery(graphql`
    query {
      agile: file(relativePath: { eq: "icons/agile.png" }) {
        childImageSharp {
          gatsbyImageData(width: 40, placeholder: BLURRED)
        }
      }
      experience: file(relativePath: { eq: "icons/experience.png" }) {
        childImageSharp {
          gatsbyImageData(width: 40, placeholder: BLURRED)
        }
      }
      transparency: file(relativePath: { eq: "icons/transparency.png" }) {
        childImageSharp {
          gatsbyImageData(width: 40, placeholder: BLURRED)
        }
      }
      top: file(relativePath: { eq: "icons/1%.png" }) {
        childImageSharp {
          gatsbyImageData(width: 40, placeholder: BLURRED)
        }
      }
    }
  `)
  return (
    <section className="relative">
      <div className="gradientBackground absolute inset-0 -z-10 flex items-center justify-center"></div>
      <div className="container">
        <div className="py-8 md:py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8">
            <ContentHeading centre>
              Why <span className="text-6xl md:text-8xl">98%</span> of SMEs,
              startups, and scale-ups choose us
            </ContentHeading>
            <div className="mx-auto  max-w-2xl">
              <Text centre>
                Most of our clients stay with us for longer than 3 years on
                average and we always have previous clients in our repeat cycle.
              </Text>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
            <InfoBox
              className={CardClass}
              icon={data.agile}
              title="Agile on Steroids"
              content="We provide cross-functional Agile teams that are self-organising, adapting to your business needs, taking ownership, and delivering to their full potential. You can scale up 
"
            />
            <InfoBox
              className={CardClass}
              icon={data.transparency}
              title="Complete Transparency"
              content="This continuous knowledge transfer is a guarantee that the final product will be handed over without unnecessary stages of knowledge and documentation "
            />
            <InfoBox
              className={CardClass}
              icon={data.experience}
              title="Experienced Staff"
              content="All team members from our core developers to Product Managers and CTO’s have years of experience in different niches and together they bring a lot to the table
           "
            />
            <InfoBox
              className={CardClass}
              icon={data.top}
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
