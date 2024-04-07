import { MenuButton } from '@/Components/MenuButton'
import { MobileCaseStudies } from '@/Components/MobileCaseStudies'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/Components/ui/sheet'

import webteamsLogo from '@/assets/webteams-logo.svg'
import Image from 'next/image'

import linkedinIcon from '@/assets/linkedin-icon.svg'
import facebookIcon from '@/assets/facebook-icon.svg'
import emailIcon from '@/assets/email-icon.svg'
import { ImageCircle } from '@/Util/ImageCirclu'

import { MobileServiceDropdown } from '@/Components/MobileServiceDropdown'
import Link from 'next/link'

export const BurgerMenu = (props: { className?: string }) => {
  return (
    <div
      className={`${props.className} z-50 mb-8 flex w-screen flex-row items-center justify-between px-4`}
    >
      <Link href='/' className='flex items-center justify-center gap-2'>
        <Image src={webteamsLogo} alt='webteams logo' />
        <span className='mt-1 text-sm font-semibold'>Webteams</span>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <div className='size-min space-y-[6px]'>
            <div className='h-[2px] w-4 rounded-full bg-white'></div>
            <div className='h-[2px] w-4 rounded-full bg-white'></div>
          </div>
        </SheetTrigger>
        <SheetContent className='absolute flex min-w-[100vw] flex-col overflow-y-scroll bg-black'>
          <SheetHeader className='mb-4 text-white'>
            <SheetTitle className='text-white'>Menu</SheetTitle>
            {/* <SheetDescription>description</SheeDescription> */}
          </SheetHeader>

          <span className='mb-4 mt-20 block text-xl'>Case studies</span>
          <SheetClose asChild>
            <MobileCaseStudies />
          </SheetClose>
          <div className='mt-12 flex flex-col gap-8'>
            <SheetClose asChild>
              <MenuButton href='/' regex='^\/$'>
                home
              </MenuButton>
            </SheetClose>
            <MobileServiceDropdown />
            <SheetClose asChild>
              <MenuButton href='/about' regex='^\/about$'>
                about us
              </MenuButton>
            </SheetClose>
          </div>

          <SheetFooter className='flex flex-1 items-center justify-end gap-14'>
            <SheetClose asChild>
              <Link
                href='/contact'
                className='flex items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-black'
              >
                Get project estimation
              </Link>
            </SheetClose>
            <div className='flex gap-4'>
              <ImageCircle
                src={linkedinIcon}
                circleSize={40}
                imageHeight={15}
                alt='linkedin Icon'
              />
              <ImageCircle
                src={facebookIcon}
                circleSize={40}
                imageHeight={15}
                alt='facebook Icon'
              />
              <ImageCircle
                src={emailIcon}
                circleSize={40}
                imageHeight={15}
                alt='email Icon'
              />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
