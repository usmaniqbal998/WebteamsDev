import React from 'react'

const Text = ({ children, centre = false, color = 'white' }) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={`text-${color} ${' '} ${centre ? 'text-center' : ''}`}>
      <p className="text-[14px] font-normal leading-[200%] text-current md:text-[16px]">
        {children}
      </p>
    </div>
  )
}

export default Text
