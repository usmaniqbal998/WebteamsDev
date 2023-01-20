import React from 'react'
import Button from '../components/atoms/Button'
import Brief from '../components/Brief'
import PageHeading from '../components/molecules/PageHeading'
import Section from '../components/organisms/Section'
import SideNav from '../components/organisms/SideNav'
import SideNavContent from '../components/SideNavContent'
import Values from '../components/Values'
import { StaticImage } from 'gatsby-plugin-image'
import Typography from '../components/atoms/Text'
import { SEO } from '../components/SEO'
import { navigate } from 'gatsby'

const about = () => {
  return (
    <>
      <div className="bg-[#282828]">
        <PageHeading
          description="We have helped our clients to change how their users do day-to-day things like banking, listening to music, renting homes and cars etc. Products that we have worked on are featured in Tech Crunch, Business Insider and Product Hunt.
"
          buttonText="REACH OUT NOW"
          onButtonClicked={() => {
            navigate('/contact')
          }}
        >
          We are the{' '}
          <Typography variant="span" className="text-secondary-400">
            fastest growing
          </Typography>{' '}
          digital consultancy in Europe and the Middle East
        </PageHeading>
      </div>
      <Section>
        <div className="mt-5 grid grid-cols-1 gap-20 md:mt-10 lg:grid-cols-12 lg:gap-2">
          <SideNav id="about" aboutPage />
          <SideNavContent id="about">
            <Brief
              id="about"
              aboutStory={
                <div className="flex flex-col gap-5 lg:gap-10">
                  <Typography variant="h2">Our Story</Typography>
                  <Typography variant="p">
                    The founders of the company were friends who used to work as
                    software developers and designers in different companies.
                    They found that how business owners struggle in making the
                    right technological decisions for their digital products and
                    it's a hassle to onboard in-house development teams for many
                    businesses.
                    <br />
                    <br /> They started the company to address this issue by
                    providing agile squads on fixed costs that can be scaled up
                    and down according to the business requirement and offer
                    these squads as strategic partners in development of digital
                    product from start to finish.
                  </Typography>
                </div>
              }
            >
              <div className=" grid grid-cols-1 items-center justify-between gap-20 md:grid-cols-5 md:flex-row md:gap-10">
                <div className="order-2 mx-14 md:order-1 md:col-span-1 md:row-span-3 md:mx-0">
                  <StaticImage
                    src="../images/about.png"
                    alt="graph"
                    width={400}
                    placeholder="blurred"
                  />
                </div>
                <Typography
                  variant="h2"
                  className="order-1 md:order-2 md:col-span-4"
                >
                  Who do we help?
                </Typography>

                <Typography
                  variant="p"
                  className="order-4 md:order-3 md:col-span-4"
                >
                  Companies that rely on technology for business growth. Our
                  clients see us as a long-term strategic partner and trusted
                  adviser for product design, development, DevOps, and cloud
                  computing work.
                </Typography>
                <div className="order-3 flex justify-center md:order-4 md:col-span-4 md:justify-start">
                  <Button name="REACH OUT NOW" />
                </div>
              </div>
            </Brief>
            <Values />
          </SideNavContent>
        </div>
      </Section>
    </>
  )
}

export default about

export const Head = () => <SEO title="About" />
