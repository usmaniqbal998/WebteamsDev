import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Text from '../atoms/Text'

const InfoBox = ({
  title,
  content,
  icon,
  className = 'flex flex-col gap-6 text-left text-white',
}) => {
  const image = getImage(icon)
  return (
    <div className={className}>
      {icon && (
        <div>
          <GatsbyImage image={image} alt={title} />
        </div>
      )}
      <div>
        <h5 className="mb-4 text-[20px] font-bold leading-[110%] text-current md:text-[24px]">
          {title}
        </h5>
        <Text color="current">{content}</Text>
      </div>
    </div>
  )
}

export default InfoBox
