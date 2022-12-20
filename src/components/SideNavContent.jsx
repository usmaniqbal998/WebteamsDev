import React from 'react'
// import DesignProcess from './DesignProcess'
// import Projects from './Projects'

const SideNavContent = ({ id = 1, children, process, projects }) => {
  return (
    <div className="lg:col-span-10 lg:-mt-10">
      <div id={`scrollspy-${id}`} className="flex flex-col">
        {children}
        {/* {process && <DesignProcess id={id} />}
        {projects && <Projects id={id} />} */}
      </div>
    </div>
  )
}

export default SideNavContent
