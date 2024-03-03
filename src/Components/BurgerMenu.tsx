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

const ImageCircle = (props: {
  src: Parameters<typeof Image>[0]['src']
  alt: string
}) => {
  return (
    <div className='flex size-10 items-center justify-center rounded-full bg-transparent ring-1 ring-white'>
      <Image src={props.src} alt={props.alt} height={15} className='stroke-1' />
    </div>
  )
}

export const BurgerMenu = (props: { className?: string }) => {
  return (
    <div
      className={`${props.className} flex flex-row items-center justify-between`}
    >
      <div className='flex items-center justify-center gap-2'>
        <Image src={webteamsLogo} alt='webteams logo' />
        <span className='mt-1 text-sm font-semibold'>Webteams</span>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <div className='size-min space-y-[6px]'>
            <div className='h-[2px] w-4 rounded-full bg-white'></div>
            <div className='h-[2px] w-4 rounded-full bg-white'></div>
          </div>
        </SheetTrigger>
        <SheetContent className='flex w-11/12 flex-col bg-black'>
          <SheetHeader className='mb-4 text-white'>
            <SheetTitle className='text-white'>Menu</SheetTitle>
            {/* <SheetDescription>description</SheeDescription> */}
          </SheetHeader>

          <span className='mb-4 mt-20 block text-xl text-neutral-400'>
            Case studies
          </span>
          <MobileCaseStudies />
          <div className='mt-12 flex flex-col gap-8'>
            <SheetClose asChild>
              <MenuButton href='/' regex='^\/$'>
                home
              </MenuButton>
            </SheetClose>
            <SheetClose asChild>
              <MenuButton href='/about' regex='^\/about$'>
                about us
              </MenuButton>
            </SheetClose>
            <SheetClose asChild>
              <MenuButton href='/services' regex='^\/services'>
                services
              </MenuButton>
            </SheetClose>
          </div>

          <SheetFooter className='flex flex-1 items-center justify-end gap-14'>
            <button className='rounded-full bg-white px-6 py-4 font-semibold text-black'>
              Get project estimation
            </button>
            <div className='flex gap-4'>
              <ImageCircle src={linkedinIcon} alt='linkedin Icon' />
              <ImageCircle src={facebookIcon} alt='facebook Icon' />
              <ImageCircle src={emailIcon} alt='email Icon' />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}