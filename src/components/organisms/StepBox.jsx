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
    <div className="stepbox flex gap-1">
      <div className="flex flex-col gap-4 pt-5 md:gap-5">
        {number && ringBox ? (
          <div className="flex h-16 w-16 items-baseline justify-center rounded-full bg-secondary-200">
            <Typography
              variant="span"
              className="block font-emphasis text-4xl font-bold text-black md:text-5xl"
            >
              {number}
            </Typography>
          </div>
        ) : (
          <div
            className="mb-4 flex h-8 w-8 rounded-full bg-gradient-to-br from-secondary-400 to-primary-700  p-1.5 md:h-32 md:w-32"
            style={{
              '--tw-gradient-stops':
                'var(--tw-gradient-from) 0%, var(--tw-gradient-to) 99.48%, var(--tw-gradient-to) 100%',
            }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-primary-700">
              <Typography
                variant="span"
                className="block font-emphasis text-4xl font-bold text-white md:text-5xl"
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
        <div className="svg-border h-[305px] lg:h-[355px]">
          <ImgBorder />
        </div>
      )}
    </div>
  )
}

export default StepBox
