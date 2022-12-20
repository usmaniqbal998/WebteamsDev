import * as React from 'react'
import Hero from '../components/ hero'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import PageLayout from '../components/pagelayout'
import Services from '../components/Services'
import StaffWorked from '../components/StaffWorked'
import Technologies from '../components/Technologies'
import WhyChooseUs from '../components/WhyChooseUs'

const IndexPage = () => {
  return (
    <PageLayout>
      <Hero />
      <StaffWorked />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <FAQ />
      <CTA />
    </PageLayout>
  )
}

export default IndexPage
