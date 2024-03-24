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

const menuItems: Omit<MenuItemProps, 'isSelected'>[] = [
  {
    href: '/services/design',
    title: 'Design',
    description: 'Looking for award-winning design teams? look no more!'
  },
  {
    href: '/services/web',
    title: 'Web Development',
    description: 'Grow your business with fully tailored Web Apps'
  },
  {
    href: '/services/modile',
    title: 'Mobile App Development',
    description: 'Grow your business with fully tailored MobileApps'
  }
]

export const ServiceDropdown = () => {
  const pathName = usePathname()
  const isServicePage = pathName.startsWith('/services')

  return (
    <div>
      <NavigationMenu>
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
          <NavigationMenuContent className='flex flex-col gap-4 bg-black p-4 '>
            {menuItems.map(item => (
              <MenuItem
                key={item.href}
                href={item.href}
                description={item.description}
                title={item.title}
                isSelected={item.href === pathName}
              />
            ))}
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
      'group flex w-64 flex-col bg-black p-4 text-white hover:bg-neutral-600 transition-colors duration-300 rounded-xl',
      'data-[selected=true]:bg-neutral-600'
    )}
  >
    <Link href={props.href}>
      <span className='font-bold'>{props.title}</span>
      <p className='text-sm text-neutral-300 '>{props.description}</p>
    </Link>
  </NavigationMenuLink>
)
