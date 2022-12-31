import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Button from './atoms/Button'
import Section from './organisms/Section'
import { graphql, useStaticQuery } from 'gatsby'
import Typography from './atoms/Text'

const Services = () => {
  const [openTab, setOpenTab] = React.useState(1)
  const data = useStaticQuery(graphql`
    query {
      projectui: file(relativePath: { eq: "services/project-ui-ux.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 350
            blurredOptions: { width: 100 }
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      webmobile: file(relativePath: { eq: "services/mobile-web-app-dev.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 350
            blurredOptions: { width: 100 }
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      cloud: file(relativePath: { eq: "services/cloud.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 350
            blurredOptions: { width: 100 }
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      qa: file(relativePath: { eq: "services/qa-test.png" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            width: 350
            blurredOptions: { width: 100 }
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const services = [
    {
      id: 1,
      title: 'Product UI/UX Design',
      href: 'ui-ux',
      image: data.projectui,
      content:
        'Every squad have top-notch dedicated product designers that understand your users and business and create beautiful userinterfaces accordingly',
    },
    {
      id: 2,
      title: 'Mobile and Web App Development',
      href: 'mobile-web',
      image: data.webmobile,
      content:
        'Every squad have top-notch dedicated product designers that understand your users and business and create beautiful userinterfaces accordingly',
    },
    {
      id: 3,
      title: 'Cloud Engineering and Dev Ops',
      href: 'cloud',
      image: data.cloud,
      content:
        'Every squad have top-notch dedicated product designers that understand your users and business and create beautiful userinterfaces accordingly',
    },
    {
      id: 4,
      title: 'Quality Assurance and Testing',
      href: 'qa',
      image: data.qa,
      content:
        'Every squad have top-notch dedicated product designers that understand your users and business and create beautiful userinterfaces accordingly',
    },
  ]
  return (
    <Section>
      <div className="grid grid-cols-1  gap-0 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <Typography variant="h3">
            We Provide Experts in every aspect of your product lifecycle.
          </Typography>
          <Typography variant="p">
            Join 100+ Technology Companies that went beyond their goals with us.
            Whether you are a fortune 500 or a startup - we give you top-notch
            Product Managers and Development Squads with relevant experience in
            your niche to help you succeed. You can scale these dedicated squads
            up and down anytime
          </Typography>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 items-center gap-16 md:mt-20 lg:grid-cols-2 lg:gap-10">
        <ul
          className="order-2 mb-0 flex list-none flex-col md:order-1"
          role="tablist"
        >
          {services.map((item) => (
            <li
              key={item.id}
              className={
                'grow border border-primary-200 outline-none text-center lg:text-left text-[20px] leading-[25px] font-bold w-full lg:text-[48px] lg:leading-[120%] hover:bg-[#2a2a2a] focus:bg-[#2a2a2a] ' +
                (openTab === item.id ? 'bg-[#2a2a2a]' : 'bg-transparent')
              }
            >
              <a
                className="block  py-8 px-20 lg:py-14"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(item.id)
                }}
                data-toggle="tab"
                href={`#${item.href}`}
                role="tablist"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {services.map((item) => (
          <div
            key={item.id}
            className={`${
              openTab == item.id ? 'flex' : 'hidden'
            } order-1 flex-col items-center justify-center gap-10 md:order-2`}
            id={item.href}
          >
            <div className="mx-8 md:mx-0">
              <GatsbyImage image={getImage(item.image)} alt={item.title} />
            </div>
            <Typography variant="p" align="center">
              {item.content}
            </Typography>
            <Button name="GET PROJECT ESTIMATION" />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Services
