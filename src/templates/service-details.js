import React from 'react'
import PageLayout from '../components/pagelayout'
import SideNav from '../components/organisms/SideNav'
import SideNavContent from '../components/SideNavContent'
import Section from '../components/organisms/Section'
import PageHeading from '../components/molecules/PageHeading'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import Brief from '../components/Brief'
import DesignProcess from '../components/DesignProcess'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ServiceDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const {
    content,
    imgPath,
    topTitle,
    bottomTitle,
    description,
    slug,
    designProcess,
    whyNative,
    whyHire,
    caseStudies,
    service,
    title,
  } = data.markdownRemark.frontmatter

  const image = getImage(imgPath)
  return (
    <PageLayout>
      <PageHeading
        topText={topTitle}
        bottomText={bottomTitle}
        content={content}
        description={description}
        buttonText="REACH OUT NOW"
      />
      <Section>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-2">
          <SideNav id={slug} />
          <SideNavContent>
            <Brief
              id={slug}
              service={service}
              whyHire={whyHire}
              advNative={whyNative}
            >
              <div className="brief flex flex-col items-center justify-between gap-8 md:flex-row md:gap-10">
                <div
                  className="mobile order-1 text-white md:hidden"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                {imgPath && (
                  <div className="order-2 w-full  md:order-1 md:basis-1/4">
                    <GatsbyImage image={image} alt={title} />
                  </div>
                )}

                <div
                  className="large order-3 text-white md:basis-3/4"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </Brief>
            {designProcess && <DesignProcess id={slug} data={designProcess} />}
            {caseStudies && <Projects id={slug} data={caseStudies} />}
          </SideNavContent>
        </div>
      </Section>
    </PageLayout>
  )
}

export default ServiceDetails

export const query = graphql`
  query ServiceDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        designProcess {
          content
          number
          title
        }
        description
        content
        bottomTitle
        service
        slug
        title
        topTitle
        whyNative {
          content
          title
        }
        whyHire {
          content
          title
          imgurl {
            childImageSharp {
              gatsbyImageData(width: 40)
            }
          }
        }
        caseStudies {
          title
          content
          imgPath {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                blurredOptions: { width: 100 }
              )
            }
          }
        }
        imgPath {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 500
              blurredOptions: { width: 100 }
              # aspectRatio: 1.5
              # transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`
