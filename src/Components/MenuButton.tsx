'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export type MenuButtonProps = {
  children: ReactNode
  regex: string
} & Parameters<typeof Link>[0]

export const MenuButton = ({ regex, children, ...rest }: MenuButtonProps) => {
  const pathname = usePathname()

  return (
    <Link
      data-active={new RegExp(regex).test(pathname)}
      className='font-semibold text-gray-400 transition duration-200 ease-in data-[active=true]:text-white hover:text-white lg:text-sm sm:text-xl sm:font-normal sm:data-[active=true]:text-green-500'
      {...rest}
    >
      {children}
    </Link>
  )
}
