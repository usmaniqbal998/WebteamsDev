import React from 'react'
import Button from '../components/atoms/Button'
import Brief from '../components/Brief'
import PageHeading from '../components/organisms/PageHeading'
import Section from '../components/organisms/Section'
import SideNav from '../components/organisms/SideNav'
import PageLayout from '../components/pagelayout'
import SideNavContent from '../components/SideNavContent'
import Values from '../components/Values'
import { StaticImage } from 'gatsby-plugin-image'
import Typography from '../components/atoms/Text'

const about = () => {
  return (
    <PageLayout>
      <PageHeading
        description="We have helped our clients to change how their users do day-to-day things like banking, listening to music, renting homes and cars etc. Products that we have worked on are featured in Tech Crunch, Business Insider and Product Hunt.
"
        buttonText="REACH OUT NOW"
      >
        We are the{' '}
        <Typography variant="span" className="text-secondary-400">
          fastest growing
        </Typography>{' '}
        digital consultancy in Europe and the Middle East
      </PageHeading>
      <Section>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-2">
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
              <div className=" flex flex-col items-center justify-between gap-8 md:flex-row md:gap-10">
                <div className="order-2 md:order-1">
                  <StaticImage
                    src="../images/about.png"
                    alt="graph"
                    width={500}
                    placeholder="blurred"
                  />
                </div>
                <div className="order-1 flex flex-col gap-4 md:order-2 lg:gap-8">
                  <Typography variant="h2">Who do we help?</Typography>
                  <div className="order-3">
                    <Typography variant="p">
                      Companies that rely on technology for business growth. Our
                      clients see us as a long-term strategic partner and
                      trusted adviser for product design, development, DevOps,
                      and cloud computing work.
                    </Typography>
                    <div className="mt-2 md:mt-4">
                      <Button name="REACH OUT NOW" />
                    </div>
                  </div>
                </div>
              </div>
            </Brief>
            <Values />
          </SideNavContent>
        </div>
      </Section>
    </PageLayout>
  )
}

export default about
