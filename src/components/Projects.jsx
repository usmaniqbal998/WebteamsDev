import React from 'react'
import Typography from './atoms/Text'
import CaseStudyPost from './organisms/CaseStudyPost'
// import CaseStudyPost from './organisms/CaseStudyPost'

const Projects = ({ id, data }) => {
  return (
    <div id={`projects-${id}`} className="pt-16 md:pt-20 lg:pt-24">
      <Typography variant="h2" className="pb-2 lg:pb-4">
        Case Studies
      </Typography>
      <Typography variant="p">
        Great Products that we have built for our clients.
      </Typography>
      <div className="mt-6 grid grid-cols-1 gap-5 gap-y-16 md:mt-12 md:grid-cols-2">
        {data.map((item, idx) => (
          <CaseStudyPost
            key={idx}
            title={item.title}
            content={item.content}
            img={item.imgPath}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
