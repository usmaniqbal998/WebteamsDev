import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Typography from '../atoms/Text'
import { ArrowForwardNew } from '../../utils/icons'
import Button from '../atoms/Button'

const CaseStudyPost = ({ title, content, img }) => {
  const image = getImage(img)
  return (
    <div className="flex flex-col gap-5 md:gap-8">
      <div className="w-full">
        {img ? (
          <GatsbyImage image={image} title={title} />
        ) : (
          <StaticImage
            src="../../images/caseStudies/task-mgmt.png"
            alt="Default"
            width={500}
          />
        )}
      </div>

      <div>
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography variant="p">{content}</Typography>
      </div>
      <div>
        <Button className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[3px] bg-white transition-colors duration-300 hover:bg-secondary-400">
          <ArrowForwardNew />
        </Button>
      </div>
    </div>
  )
}

export default CaseStudyPost
