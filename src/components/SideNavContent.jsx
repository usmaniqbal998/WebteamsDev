import React from 'react'
import DesignProcess from './DesignProcess'
import Projects from './Projects'

const SideNavContent = ({ id = 1, children, designProcess, caseStudies }) => {
  return (
    <div className="lg:col-span-10 lg:-mt-10">
      <div id={`scrollspy-${id}`} className="flex flex-col">
        {children}
        {designProcess && <DesignProcess id={id} data={designProcess} />}
        {caseStudies && <Projects id={id} data={caseStudies} />}
      </div>
    </div>
  )
}

export default SideNavContent
