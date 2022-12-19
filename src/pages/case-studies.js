import React from 'react'
import CaseStudyPost from '../components/organisms/CaseStudyPost'
import PageHeading from '../components/organisms/PageHeading'
import Section from '../components/organisms/Section'
import PageLayout from '../components/pagelayout'
import { graphql } from 'gatsby'

const caseStudies = ({ data }) => {
  return (
    <PageLayout>
      <PageHeading
        topText="Case"
        bottomText="Studies"
        content="This is how we craft our design from
      scratch"
        description="Complete Design Case Studies and that are in progress"
        buttonText="REACH OUT NOW"
      ></PageHeading>
      <Section>
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
    </PageLayout>
  )
}

export default caseStudies

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
