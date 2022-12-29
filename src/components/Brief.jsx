/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import InfoBox from './organisms/InfoBox'
import Typography from './atoms/Text'

const HeadingwithTwoColGridSection = (props) => {
  const { data, color = 'white', className, heading, contentBoxClass } = props
  return (
    <div className={className}>
      <Typography variant="h3" color={color} className="pb-4 md:pb-8">
        {heading}
      </Typography>
      <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
        {data &&
          data.map((item, idx) => (
            <InfoBox
              className={contentBoxClass && contentBoxClass}
              key={idx}
              title={item.title}
              content={item.content}
              iconImg={item.imgurl}
            />
          ))}
      </div>
    </div>
  )
}

const Brief = ({
  id = 1,
  aboutStory,
  children,
  whyHire,
  advNative,
  service,
}) => {
  return (
    <div
      id={`brief-${id}`}
      className="flex flex-col gap-16 md:gap-20 lg:gap-24"
    >
      {aboutStory && aboutStory}
      {children}
      {whyHire && (
        <HeadingwithTwoColGridSection
          heading={`Why you should hire our ${service} Team?`}
          data={whyHire}
        />
      )}
      {advNative && (
        <HeadingwithTwoColGridSection
          heading="Advantages of React Native"
          data={advNative}
          className="rounded-[18px] bg-secondary-200 p-5 md:p-10"
          color="black"
          contentBoxClass="flex flex-col gap-5 text-left text-black"
        />
      )}
    </div>
  )
}

export default Brief
