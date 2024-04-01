'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from '@/Components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/Util'
import { MobileCaseStudies } from '@/Components/MobileCaseStudies'

const linkCardClassName = cn(
  'flex flex-col items-start justify-center gap-2 rounded-xl p-3 text-sm hover:bg-black hover:text-accent',
  'data-[selected=true]:bg-black data-[selected=true]:text-accent data-[selected=true]:cursor-default'
)

export const ServiceDropdown = () => {
  const pathName = usePathname()
  const isServicePage = pathName.startsWith('/services')

  return (
    <div>
      <NavigationMenu className='flex justify-center'>
        <NavigationMenuItem className='bg-black'>
          <NavigationMenuTrigger
            data-selected={isServicePage}
            className={cn(
              'bg-black text-base font-semibold hover:bg-neutral-600 hover:text-white active:bg-black',
              'data-[selected=true]:text-[#CEDCF6]'
            )}
          >
            services
          </NavigationMenuTrigger>
          <NavigationMenuContent className='flex w-[99vw] flex-col px-[10%]'>
            <div className='flex items-start justify-between py-8'>
              <div className='flex w-4/12 flex-col gap-4'>
                <span className='font-medium'>Development</span>
                <hr className='h-[2px] w-full bg-neutral-800' />
                <div className='flex gap-1'>
                  <Link
                    href='/services/web'
                    data-selected={pathName === '/services/web'}
                    className={linkCardClassName}
                  >
                    <span className='text-sm font-medium'>
                      Web App Development
                    </span>
                    <span className='text-xs'>
                      Java, Html-Css, Angular, Django
                    </span>
                  </Link>
                  <Link href='/services/mobile' className={linkCardClassName}>
                    <span className='text-sm font-medium'>
                      Mobile App Development
                    </span>
                    <span className='text-xs'>Android, IOS</span>
                  </Link>
                </div>
              </div>

              <div className='flex w-4/12 flex-col gap-4'>
                <span className='font-medium'>Design</span>
                <hr className='h-[2px] w-full bg-neutral-800'></hr>
                <Link href='/services/design' className={linkCardClassName}>
                  <span className='text-sm font-medium'>UI/UX Design</span>
                  <span className='text-xs'>
                    User Flows, Prototype, Design System, Research
                  </span>
                </Link>
              </div>

              <div className='flex w-3/12 flex-col gap-4'>
                <span className='text-3xl font-semibold'>Team of Experts</span>
                <Link
                  href='/contact'
                  className='w-min text-nowrap rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-black hover:bg-black hover:text-accent'
                >
                  Get quotation
                </Link>
              </div>
            </div>
            <div className='flex h-full flex-col gap-4'>
              <span className='font-semibold'>Case study</span>
              <hr className='h-[2px] w-4/12 bg-neutral-800' />
              <MobileCaseStudies height={200} scale={25} />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  )
}

type MenuItemProps = {
  href: string
  title: string
  description: string
  isSelected: boolean
}

const MenuItem = (props: MenuItemProps) => (
  <NavigationMenuLink
    data-selected={props.isSelected}
    asChild
    className={cn(
      'group flex w-64 flex-col bg-black p-4 text-white hover:bg-neutral-600 transition-colors duration-300 rounded',
      'data-[selected=true]:bg-neutral-600'
    )}
  >
    <Link href={props.href}>
      <span className='font-bold'>{props.title}</span>
      <p className='text-sm text-neutral-300 '>{props.description}</p>
    </Link>
  </NavigationMenuLink>
)
