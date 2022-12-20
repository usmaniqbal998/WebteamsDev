import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Text from '../atoms/Text'
import Typography from '../atoms/Text'

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
