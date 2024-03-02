/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import StepBox from './organisms/StepBox'
import Typography from './atoms/Text'

const DesignProcess = ({ id, data }) => {
  const [leftPos, setLeftPos] = React.useState(null)
  React.useEffect(() => {
    function handleResize() {
      var process = document.querySelector('.process-invisible')
      var containerInner = document.querySelector('.grid')
      const containerInnerX = containerInner.clientWidth + 'px'
      const widthX = process.offsetWidth + 'px'
      const windowWidth = window.innerWidth + 'px'
      setLeftPos({
        left: `calc(${widthX} - ${windowWidth} + 15px + (${windowWidth} - ${containerInnerX} -  15px)/2)`,
        right: `calc((${containerInnerX} - ${windowWidth} +  15px)/2)`,
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className="relative ">
      <div
        id={`process-${id}`}
        className={`absolute inset-y-0   ${
          id === 'ui-ux-design' ? 'bg-[#1b1b1b]' : 'bg-[#2b2b2b]'
        } py-16 md:py-20 lg:py-24`}
        style={leftPos}
      >
        <div className="">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-0.5">
              <div className="col-span-0 lg:col-span-2 lg:pt-5"></div>
              <div className="lg:col-span-10">
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
                        noBorder={
                          data.length === idx + 1 || id !== 'ui-ux-design'
                        }
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={`process-${id}`}
        className="invisible relative inset-y-0 py-16 md:py-20 lg:py-24"
      >
        <div className="process-invisible">
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
      </div>
    </div>
  )
}

export default DesignProcess
