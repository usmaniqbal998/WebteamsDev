import React from 'react'

const Section = ({ children }) => {
  return (
    <section>
      <div className="container">
        <div className="py-6 md:py-12">{children}</div>
      </div>
    </section>
  )
}

export default Section
