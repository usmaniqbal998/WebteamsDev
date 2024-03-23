'use client'

import { cn } from '@/Util'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ContactUsButton() {
  const pathName = usePathname()

  return (
    <Link
      data-selected={pathName.startsWith('/contact')}
      href='/contact'
      className={cn(
        'flex h-11 w-32 items-center justify-center rounded-full  p-2 text-center text-sm font-semibold text-black',
        'lg:w-28 lg:text-xs',
        'bg-white duration-300 transition-colors  hover:bg-[#ECFAE5] data-[selected=true]:bg-[#CEDCF6]'
      )}
    >
      CONTACT US
    </Link>
  )
}
