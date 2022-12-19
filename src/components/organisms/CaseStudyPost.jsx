import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Text from '../atoms/Text'

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
        <h5 className="mb-2 text-xl font-bold text-secondary-400 md:text-2xl">
          {title}
        </h5>
        <Text>{content}</Text>
      </div>
      <div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[3px] bg-white transition-colors duration-300 hover:bg-secondary-400">
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7276 4.35355C12.9228 4.15829 12.9228 3.84171 12.7276 3.64645L9.5456 0.464466C9.35033 0.269204 9.03375 0.269204 8.83849 0.464466C8.64323 0.659728 8.64323 0.976311 8.83849 1.17157L11.6669 4L8.83849 6.82843C8.64323 7.02369 8.64323 7.34027 8.83849 7.53553C9.03375 7.7308 9.35033 7.7308 9.5456 7.53553L12.7276 4.35355ZM12.374 3.5L0.843578 3.5V4.5L12.374 4.5V3.5Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyPost
