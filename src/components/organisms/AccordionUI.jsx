import React from 'react'
import { CaretDown, CaretUp } from '../../utils/icons'
import Typography from '../atoms/Text'

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id)

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="group flex w-full cursor-pointer items-center justify-between border-b-[0.5px] border-primary-200 py-8 transition-all duration-300 "
      >
        <Typography variant="h4" className="text-[20px] leading-[30px]">
          {title}
        </Typography>
        <div className="flex items-center justify-center md:pr-5">
          {Index !== Id ? <CaretDown /> : <CaretUp />}
        </div>
      </div>

      {Index === Id && (
        <div className="mb-2 h-auto w-full py-5 text-white">{children}</div>
      )}
    </>
  )
}

export default AccordionUI
