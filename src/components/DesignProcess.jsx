import React from 'react'
import StepBox from './organisms/StepBox'
import Typography from './atoms/Text'

const DesignProcess = ({ id, data }) => {
  return (
    <div id={`process-${id}`} className="py-16 md:py-20 lg:py-24">
      <Typography variant="h2" className="pb-6 lg:pb-12">
        Our Design Process
      </Typography>
      <div
        className={`grid ${
          id === 'ui-ux-design'
            ? 'grid-cols-2 gap-y-10 md:grid-cols-3 xl:grid-cols-5'
            : 'grid-cols-1 gap-5 md:grid-cols-3 md:gap-10'
        }  `}
      >
        {data &&
          data.map((item, idx) => (
            <StepBox
              key={idx}
              number={item.number}
              title={item.title}
              content={item.content}
              ringBox={id === 'ui-ux-design'}
              noBorder={data.length === idx + 1 || id !== 'ui-ux-design'}
            />
          ))}
      </div>
    </div>
  )
}

export default DesignProcess
