import React from 'react'
import { ArrowRightIcon } from '../../utils/icons'

const Button = ({ name, children, ...rest }) => {
  return (
    <button
      className="group relative flex items-center justify-center gap-2.5 rounded-[3px] bg-white py-[9px] px-[22px] font-sans text-xs font-bold uppercase leading-[14px] text-black transition-all duration-500 ease-in hover:bg-secondary-400"
      {...rest}
    >
      {children}
      {name && (
        <>
          <div className="order-none flex-none grow-0">{name}</div>
          <ArrowRightIcon />
          <div className="absolute inset-0">
            <div className="h-full w-full translate-x-2 translate-y-2 rounded-br-[3px] border-b border-r border-white bg-transparent transition-all duration-300 ease-in group-hover:border-secondary-400 group-active:translate-x-1 group-active:translate-y-1" />
          </div>
        </>
      )}
    </button>
  )
}

export default Button
