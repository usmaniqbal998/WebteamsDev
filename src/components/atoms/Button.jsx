import React from 'react'

const Button = ({ name }) => {
  return (
    <button className="group relative flex items-center justify-center gap-2.5 rounded-[3px] bg-white py-[9px] px-[22px] font-sans text-xs font-bold uppercase leading-[14px] text-black transition-all duration-500 ease-in hover:bg-secondary-400">
      <div className="order-none flex-none grow-0">{name}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
      <div className="absolute inset-0">
        <div className="h-full w-full translate-x-2 translate-y-2 rounded-br-[3px] border-b border-r border-white bg-transparent transition-all duration-300 ease-in group-hover:border-secondary-400 group-active:translate-x-1 group-active:translate-y-1" />
      </div>
    </button>
  )
}

export default Button
