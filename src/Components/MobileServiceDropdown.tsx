'use client'

import { MenuButton } from '@/Components/MenuButton'
import { SheetClose } from '@/Components/ui/sheet'
import { cn } from '@/Util'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

export const MobileServiceDropdown = () => {
  const pathname = usePathname()

  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='unique-item'>
        <AccordionTrigger className='group flex w-full items-center justify-between'>
          <span
            data-active={/^\/services/.test(pathname)}
            className={cn('text-xl', 'data-[active=true]:text-[#DAF9CA]')}
          >
            Services
          </span>
          <ChevronDown className='-rotate-90 transition-transform duration-200 group-data-[state=open]:rotate-0' />
        </AccordionTrigger>
        <AccordionContent className='flex flex-col items-start justify-start gap-4 [&>*:first-child]:mt-4'>
          <SheetClose asChild>
            <MenuButton
              className='sm:text-sm'
              regex='^/services/web$'
              href='/services/web'
            >
              Web App Development
            </MenuButton>
          </SheetClose>
          <SheetClose asChild>
            <MenuButton
              className='sm:text-sm'
              regex='^/services/mobile$'
              href='/services/mobile'
            >
              Mobile App Development
            </MenuButton>
          </SheetClose>
          <SheetClose asChild>
            <MenuButton
              className='sm:text-sm'
              regex='^/services/design$'
              href='/services/design'
            >
              UI/UX Design
            </MenuButton>
          </SheetClose>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
