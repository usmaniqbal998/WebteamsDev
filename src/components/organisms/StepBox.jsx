import React from 'react'
import Text from '../atoms/Text'
import Typography from '../atoms/Text'
import { ImgBorder } from '../../utils/icons'

const StepBox = ({
  number,
  title,
  content,
  noBorder = false,
  ringBox = true,
}) => {
  return (
    <div className="stepbox flex items-start gap-3 lg:gap-1.5">
      <div className="flex flex-col gap-4 pt-5 md:gap-5 lg:pt-10">
        {number && ringBox ? (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-200">
            <Typography
              variant="span"
              className="block h-16 align-middle font-emphasis  text-5xl font-bold leading-[110%] text-black"
            >
              {number}
            </Typography>
          </div>
        ) : (
          <div
            className="mb-4 flex h-24 w-24 rounded-full bg-gradient-to-br from-secondary-400 to-primary-700  p-1.5 md:h-32 md:w-32"
            style={{
              '--tw-gradient-stops':
                'var(--tw-gradient-from) 0%, var(--tw-gradient-to) 99.48%, var(--tw-gradient-to) 100%',
            }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#2b2b2b]">
              <Typography
                variant="span"
                className="block h-max align-middle font-emphasis text-5xl font-bold leading-[110%] text-white md:text-[56px]"
              >
                {number}
              </Typography>
            </div>
          </div>
        )}
        <Typography
          variant="h5"
          className="text-[24px] font-bold leading-[110%] text-white md:text-[28px]"
        >
          {title}
        </Typography>
        <Typography variant="p">{content}</Typography>
      </div>
      {!noBorder && (
        <div className="svg-border ">
          <ImgBorder className="h-[275px] w-[22px] md:h-[315px] md:w-[30px] lg:h-[355px]" />
        </div>
      )}
    </div>
  )
}

export default StepBox
