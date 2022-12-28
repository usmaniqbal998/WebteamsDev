import * as React from 'react'
import Hero from '../components/ hero'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Services from '../components/Services'
import StaffWorked from '../components/StaffWorked'
import Technologies from '../components/Technologies'
import WhyChooseUs from '../components/WhyChooseUs'
import { SEO } from '../components/SEO'

const IndexPage = () => {
  return (
    <>
      <Hero />
      <StaffWorked />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <FAQ />
      <CTA />
    </>
  )
}

export default IndexPage

export const Head = () => <SEO />
