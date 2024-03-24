'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/Util'

export type MenuButtonProps = {
  children: ReactNode
  regex: string
} & Parameters<typeof Link>[0]

export const MenuButton = ({ regex, children, ...rest }: MenuButtonProps) => {
  const pathname = usePathname()

  return (
    <Link
      data-active={new RegExp(regex).test(pathname)}
      className={cn(
        'font-semibold text-white transition duration-300 ease-in',
        'data-[active=true]:text-[#CEDCF6] hover:text-[#DAF9CA] lg:text-sm sm:text-xl sm:font-normal sm:data-[active=true]:text-[#DAF9CA]'
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
