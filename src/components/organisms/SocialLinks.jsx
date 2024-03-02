import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const SocialLinks = ({ vertical = false }) => {
  return (
    <div
      className={`flex ${
        vertical ? 'flex-col-reverse gap-14 ' : 'flex-row gap-10'
      } flex-1 items-center justify-center`}
    >
      <Link to="#">
        <StaticImage src="../../images/socials/facebook.svg" alt="facebook" />
      </Link>
      <Link to="#">
        <StaticImage src="../../images/socials/instagram.svg" alt="instagram" />
      </Link>
      <Link to="#">
        <StaticImage src="../../images/socials/dribble.svg" alt="dribble" />
      </Link>
      <Link to="#">
        <StaticImage src="../../images/socials/twitter.svg" alt="twitter" />
      </Link>
      <Link to="#">
        <StaticImage src="../../images/socials/linkedin.svg" alt="linkedin" />
      </Link>
    </div>
  )
}

export default SocialLinks
