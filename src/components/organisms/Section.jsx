import React from 'react'

const Section = ({ children, bgColor = 'current' }) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <section className={`bg-${bgColor}`}>
      <div className="container">
        <div className="py-8 md:py-14">{children}</div>
      </div>
    </section>
  )
}

export default Section
