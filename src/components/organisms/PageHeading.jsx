import React from 'react'
import Button from '../atoms/Button'
import Text from '../atoms/Text'
import ContentHeading from '../molecules/ContentHeading'
import Section from './Section'

const PageHeading = ({
  topText,
  bottomText,
  content,
  description,
  buttonText,
  children,
}) => {
  return (
    <Section>
      <div className="mx-auto mt-[32px] mb-8 max-w-5xl md:px-10">
        <div className="relative flex  flex-col items-center justify-center gap-5 md:gap-10">
          {topText && bottomText && (
            <h1 className="text-center font-emphasis text-[72px] font-bold  leading-[110%] text-white md:text-[180px]">
              <span className="gradientHeading font-sans md:text-[150px]">
                {topText}
              </span>{' '}
              {bottomText}
            </h1>
          )}
          <h3 className="text-center font-emphasis text-[36px] font-bold leading-[110%] text-white md:text-[64px]">
            {content || children}
          </h3>
          <Text centre>{description}</Text>
          <Button name={buttonText} />
        </div>
      </div>
    </Section>
  )
}

export default PageHeading
