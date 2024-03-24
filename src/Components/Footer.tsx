'use client'

import Image from 'next/image'
import webteamsLogo from '@/assets/webteams-logo.svg'
import { MenuButton } from '@/Components/MenuButton'
import { ImageCircle } from '@/Util/ImageCirclu'
import linkedinIcon from '@/assets/linkedin-icon.svg'
import facebookIcon from '@/assets/facebook-icon.svg'
import emailIcon from '@/assets/email-icon.svg'
import { cn } from '@/Util'
import Link from 'next/link'

const Navigator = (props: { className?: string }) => (
  <div className={props.className}>
    <MenuButton href='/about' regex='^\/about$' className='sm:text-sm'>
      about us
    </MenuButton>
    <MenuButton href='/services' regex='^\/services' className='sm:text-sm'>
      services
    </MenuButton>
  </div>
)

export const Footer = (props: { className?: string }) => {
  return (
    <footer
      className={cn(
        'flex h-32 w-screen max-w-[100vw] items-start justify-between bg-neutral-950 px-28 py-8 sm:h-40 sm:flex-col sm:px-8 sm:pb-14 sm:gap-8 sm:pt-10',
        props.className
      )}
    >
      <div className='flex w-full items-center justify-between'>
        <Link href='/' className='flex items-center justify-center gap-2'>
          <Image src={webteamsLogo} alt='webteams logo' />
          <span className='text-xl font-semibold sm:text-base'>webteams</span>
        </Link>
        <Navigator className='hidden sm:flex sm:gap-8 sm:text-sm' />
      </div>
      <div className='flex items-center gap-28 sm:w-full'>
        <Navigator className='flex gap-28 text-nowrap sm:hidden ' />
        <div className='flex gap-6 sm:w-full sm:justify-center'>
          <ImageCircle
            src={linkedinIcon}
            circleSize={35}
            imageHeight={12}
            alt='linkedin Icon'
          />
          <ImageCircle
            src={facebookIcon}
            circleSize={35}
            imageHeight={12}
            alt='facebook Icon'
          />
          <ImageCircle
            src={emailIcon}
            imageHeight={12}
            circleSize={35}
            alt='email Icon'
          />
        </div>
      </div>
    </footer>
  )
}
