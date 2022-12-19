import React from 'react'

const ContentHeading = ({ children, centre, className, color = 'white' }) => {
  return (
    <div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`text-${color} ${' '} ${
        centre ? 'text-center' : ''
      } ${className}`}
    >
      <h3 className="font-emphasis text-4xl font-bold leading-[47px] text-current md:text-5xl md:leading-[62px]">
        {children}
      </h3>
    </div>
  )
}

export default ContentHeading
