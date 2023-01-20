import React from 'react'
import Button from '../atoms/Button'
import Section from '../organisms/Section'
import Typography from '../atoms/Text'

const PageHeading = ({
  topText,
  bottomText,
  content,
  description,
  buttonText,
  children,
  onButtonClicked,
}) => {
  return (
    <Section>
      <div className="mx-auto mt-[32px] mb-8 max-w-5xl md:px-10">
        <div className="relative flex  flex-col items-center justify-center gap-5 md:gap-10">
          {topText && bottomText && (
            <Typography variant="h1" align="center">
              <Typography
                variant="span"
                className="gradientHeading font-sans lg:text-[150px]"
              >
                {topText}
              </Typography>{' '}
              {bottomText}
            </Typography>
          )}
          <Typography
            variant="h2"
            align="center"
            className="text-center font-emphasis text-[36px] font-bold leading-[110%] text-white lg:text-[64px]"
          >
            {content || children}
          </Typography>
          <Typography variant="p" align="center">
            {description}
          </Typography>
          <Button name={buttonText} onClick={onButtonClicked} />
        </div>
      </div>
    </Section>
  )
}

export default PageHeading
