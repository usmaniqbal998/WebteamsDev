import * as React from 'react'
import Hero from '../components/ hero'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Services from '../components/Services'
import StaffWorked from '../components/StaffWorked'
import Technologies from '../components/Technologies'
import WhyChooseUs from '../components/WhyChooseUs'
import { SEO } from '../components/SEO'
import { graphql } from 'gatsby'
import CaseStudyPost from '../components/organisms/CaseStudyPost'
import Section from '../components/organisms/Section'
import Typography from '../components/atoms/Text'

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero />
      <StaffWorked />
      <Services />
      <WhyChooseUs />
      <Technologies />
      <Section>
        <div className="mb-4 mx-auto flex max-w-4xl flex-col items-center justify-center gap-8">
          <Typography variant="h3" align="center">
            Case Studies
          </Typography>
          <div className="mx-auto  max-w-2xl">
            <Typography variant="p" align="center">
              This is how we craft our design from scratch
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 gap-y-16 md:mt-12 md:grid-cols-2">
          {data.allMarkdownRemark.nodes.map((item, idx) => (
            <CaseStudyPost
              key={idx}
              title={item.frontmatter.title}
              content={item.frontmatter.shortDescription}
              img={item.frontmatter.imgPath}
            />
          ))}
        </div>
      </Section>
      <FAQ />
      <CTA />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query CaseStudiesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { markdownType: { eq: "caseStudies" } } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          imgPath {
            childImageSharp {
              gatsbyImageData(width: 500, placeholder: BLURRED)
            }
          }
          title
          shortDescription
        }
      }
    }
  }
`

export const Head = () => <SEO />
