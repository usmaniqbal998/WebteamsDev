import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Typography from '../atoms/Text'

const InfoBox = ({
  title,
  content,
  icon,
  iconImg,
  className = 'flex flex-col gap-6 text-left text-white',
}) => {
  const image = getImage(iconImg)
  return (
    <div className={className}>
      {iconImg && (
        <div>
          <GatsbyImage image={image} alt={title} />
        </div>
      )}
      {icon && icon}
      <div>
        <Typography variant="h5" className="mb-4" color="current">
          {title}
        </Typography>
        <Typography variant="p" color="current">
          {content}
        </Typography>
      </div>
    </div>
  )
}

export default InfoBox
