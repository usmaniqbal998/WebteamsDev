'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export type MenuButtonProps = {
  children: ReactNode
  href: string
  regex: RegExp
}

export const MenuButton = (props: MenuButtonProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={props.href}
      data-active={props.regex.test(pathname)}
      className='font-semibold text-gray-400  transition duration-200 ease-in hover:text-white data-[active=true]:text-white'
    >
      {props.children}
    </Link>
  )
}
