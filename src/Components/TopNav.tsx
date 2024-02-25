'use client'

import { MenuButton } from '@/Components/MenuButton'
import { ContactUsButton } from './ContactUsButton'
import webteamsLogo from '@/assets/webteams-logo.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const TopNav = () => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <Image src={webteamsLogo} alt='webteams logo' />
        <span>webteams</span>
      </div>
      <div className='flex items-center gap-24'>
        <MenuButton href='/' regex={/^\/$/}>
          home
        </MenuButton>
        <MenuButton href='/about' regex={/^\/about$/}>
          about us
        </MenuButton>
        <MenuButton href='/services' regex={/^\/services/}>
          services
        </MenuButton>
        <ContactUsButton />
      </div>
    </div>
  )
}
