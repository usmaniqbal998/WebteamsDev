import { MobileCaseStudies } from '@/Components/MobileCaseStudies'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/Components/ui/sheet'

import webteamsLogo from '@/assets/webteams-logo.svg'
import Image from 'next/image'

export const BurgerMenu = (props: { className?: string }) => {
  return (
    <div
      className={`${props.className} size-min w-full flex-row items-center justify-between`}
    >
      <div className='flex items-center justify-center gap-2'>
        <Image src={webteamsLogo} alt='fjsdl' />
        <span className='mt-1 text-sm font-semibold'>Webteams</span>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <div className='space-y-[6px]'>
            <div className='h-[2px] w-4 rounded-full bg-white'></div>
            <div className='h-[2px] w-4 rounded-full bg-white'></div>
          </div>
        </SheetTrigger>
        <SheetContent className='w-11/12 bg-black'>
          <SheetHeader className='mb-4 text-white'>
            <SheetTitle className='text-white'>Menu</SheetTitle>
            {/* <SheetDescription>description</SheetDescription> */}
          </SheetHeader>

          <span>Case studies</span>
          <MobileCaseStudies />
        </SheetContent>
      </Sheet>
    </div>
  )
}
