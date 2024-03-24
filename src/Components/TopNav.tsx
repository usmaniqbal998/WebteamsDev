'use client'

import { MenuButton } from '@/Components/MenuButton'
import { ContactUsButton } from './ContactUsButton'
import webteamsLogo from '@/assets/webteams-logo.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ServiceDropdown } from '@/Components/ServiceDropdown'

export const TopNav = (props: { className?: string }) => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div
      className={`z-50 flex w-full items-center justify-between ${props.className}`}
    >
      <Link href='/' className='flex items-center justify-center gap-2'>
        <Image src={webteamsLogo} alt='webteams logo' />
        <span className='text-xl font-semibold'>webteams</span>
      </Link>

      <div className='flex items-center gap-24 xl:gap-16 lg:gap-12 md:gap-8'>
        <MenuButton href='/' regex='^\/$'>
          home
        </MenuButton>
        <ServiceDropdown />
        <MenuButton href='/about' regex='^\/about$'>
          about us
        </MenuButton>
        <ContactUsButton />
      </div>
    </div>
  )
}
