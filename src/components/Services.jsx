import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Button from './atoms/Button'
import ContentHeading from './molecules/ContentHeading'
import Text from './atoms/Text'
import { TabGroup } from '@statikly/funk'
import Section from './organisms/Section'
import { graphql, useStaticQuery } from 'gatsby'

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      projectui: file(relativePath: { eq: "services/project-ui-ux.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            blurredOptions: { width: 100 }
          )
        }
      }
      webmobile: file(relativePath: { eq: "services/mobile-web-app-dev.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            blurredOptions: { width: 100 }
          )
        }
      }
      cloud: file(relativePath: { eq: "services/cloud.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            blurredOptions: { width: 100 }
          )
        }
      }
      qa: file(relativePath: { eq: "services/qa-test.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 400
            blurredOptions: { width: 100 }
          )
        }
      }
    }
  `)
  return (
    <Section>
      <div className="grid grid-cols-1  gap-8 lg:grid-cols-5">
        <div className="flex flex-col gap-8 lg:col-span-3">
          <ContentHeading>
            We Provide Experts in every aspect of your product lifecycle.
          </ContentHeading>
          <Text>
            Join 100+ Technology Companies that went beyond their goals with us.
            Whether you are a fortune 500 or a startup - we give you top-notch
            Product Managers and Development Squads with relevant experience in
            your niche to help you succeed. You can scale these dedicated squads
            up and down anytime
          </Text>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-20 lg:grid-cols-2">
        <TabGroup numTabs={4} direction={TabGroup.direction.VERTICAL}>
          <TabGroup.TabList>
            <TabGroup.Tab
              index={0}
              className="tab-pane"
              activeClassName="bg-[#2a2a2a]"
              inactiveClassName="bg-transparent"
            >
              Product UI/UX Design
            </TabGroup.Tab>
            <TabGroup.Tab
              index={1}
              className="tab-pane"
              activeClassName="bg-[#2a2a2a]"
              inactiveClassName="bg-transparent"
            >
              Mobile and Web App Development
            </TabGroup.Tab>
            <TabGroup.Tab
              index={2}
              className="tab-pane"
              activeClassName="bg-[#2a2a2a]"
              inactiveClassName="bg-transparent"
            >
              Cloud Engineering and Dev Ops
            </TabGroup.Tab>
            <TabGroup.Tab
              index={3}
              className="tab-pane"
              activeClassName="bg-[#2a2a2a]"
              inactiveClassName="bg-transparent"
            >
              Quality Assurance and Testing
            </TabGroup.Tab>
          </TabGroup.TabList>
          <TabGroup.TabPanel
            activeClassName="flex flex-col items-center justify-center gap-10"
            inactiveClassName="hidden"
            index={0}
          >
            <GatsbyImage image={getImage(data.projectui)} alt="Project Ui/Ux" />

            <Text centre>
              Every squad have top-notch dedicated product designers that
              understand your users and business and create beautiful user
              interfaces accordingly
            </Text>
            <Button name="GET PROJECT ESTIMATION" />
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            activeClassName="flex flex-col items-center justify-center gap-10"
            inactiveClassName="hidden"
            index={1}
          >
            <GatsbyImage
              image={getImage(data.webmobile)}
              alt="Web and Mobile App Development"
            />

            <Text centre>
              Every squad have top-notch dedicated product designers that
              understand your users and business and create beautiful user
              interfaces accordingly
            </Text>
            <Button name="GET PROJECT ESTIMATION" />
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            activeClassName="flex flex-col items-center justify-center gap-10"
            inactiveClassName="hidden"
            index={2}
          >
            <GatsbyImage image={getImage(data.cloud)} alt="Cloud Engineering" />

            <Text centre>
              Every squad have top-notch dedicated product designers that
              understand your users and business and create beautiful user
              interfaces accordingly
            </Text>
            <Button name="GET PROJECT ESTIMATION" />
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            activeClassName="flex flex-col items-center justify-center gap-10"
            inactiveClassName="hidden"
            index={3}
          >
            <GatsbyImage image={getImage(data.qa)} alt="QA" />

            <Text centre>
              Every squad have top-notch dedicated product designers that
              understand your users and business and create beautiful user
              interfaces accordingly
            </Text>
            <Button name="GET PROJECT ESTIMATION" />
          </TabGroup.TabPanel>
        </TabGroup>
      </div>
    </Section>
  )
}

export default Services
