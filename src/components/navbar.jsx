import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import CoverFlow from './organisms/CoverFlow'
import Button from './atoms/Button'
import {
  AroowTopRight,
  ArrowDown,
  ArrowUp,
  CaretFillDown,
} from '../utils/icons'
import Typography from './atoms/Text'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    children: [
      { name: 'Ui/Ux Design', href: '/services/ui-ux-design' },
      { name: 'Web App Development', href: '/services/web-app-development' },
      {
        name: 'Mobile App Development',
        href: '/services/mobile-app-development',
      },
    ],
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About Us', href: '/about' },
]

const Nav = () => {
  const [navOpen, setNavOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState(false)
  return (
    <div className="">
      <nav className="container">
        <div className="relative z-30 flex items-center justify-between bg-primary-700 py-5 md:py-10">
          <div className="lg:basis-1/5">
            <Link to="/">
              <StaticImage
                src="../images/logo.svg"
                width={130}
                alt="Logo Web Teams"
              />
            </Link>
          </div>

          <div className="mx-auto hidden basis-3/5 lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <li className="group relative list-none  pb-2">
                <Link
                  key={item.name}
                  to={item.href}
                  activeClassName="activeClassNav"
                  className="inline-flex font-sans font-bold text-[#d9d9d9] transition-colors duration-300 ease-in group-hover:text-secondary-400 lg:text-lg xl:text-xl"
                >
                  {item.name}
                  {item.children && (
                    <Typography
                      variant="span"
                      className="ml-4 mt-1 self-center transition-colors duration-300 ease-in group-hover:text-secondary-400"
                    >
                      <CaretFillDown />
                    </Typography>
                  )}
                  <span className="absolute inset-x-1/2 bottom-0 border-b-2 border-transparent transition-all duration-300 ease-in group-hover:inset-x-3 group-hover:border-secondary-400" />
                </Link>
                {item.children && (
                  <ul class="absolute mt-2 hidden flex-col rounded-sm bg-primary-600 py-2 transition-all duration-500 ease-in group-hover:block group-hover:transition-all group-hover:duration-300 group-hover:ease-in">
                    {item.children.map((child, idx) => (
                      <li className="w-max list-none">
                        <Link
                          to={child.href}
                          key={idx}
                          className="block py-3 px-4 text-sm font-medium transition-all  duration-300 ease-in hover:text-secondary-400"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </div>
          <div className="hidden basis-1/5 justify-end lg:flex">
            <Button
              type="button"
              className="flex h-[52px] w-[52px]  items-center justify-center rounded-full bg-white text-black transition-colors duration-300 ease-in hover:bg-secondary-400"
            >
              <span>
                <AroowTopRight />
              </span>
            </Button>
          </div>
          <Button
            id="mobileNavBtn"
            className={`flex w-8  flex-col items-end transition-all duration-300 lg:hidden ${
              navOpen ? '-translate-y-px rotate-90' : ''
            }`}
            onClick={() => {
              setNavOpen(!navOpen)
            }}
          >
            <span
              className={`h-0.5 w-full border border-solid border-white transition-all duration-500 ${
                navOpen
                  ? 'translate-y-0 rotate-45'
                  : 'translate-y-[-5px] rotate-0'
              }`}
            />
            <span
              className={`h-0.5 border border-solid border-white transition-all duration-500 ${
                navOpen
                  ? 'w-full -translate-y-0.5 -rotate-45'
                  : 'w-1/2 translate-y-[5px] rotate-0'
              }`}
            />
          </Button>
        </div>
        <div
          className={`fixed inset-0  z-10  min-w-0 bg-primary-700 transition-all  duration-300 ease-in  lg:hidden ${
            navOpen ? 'visible translate-x-0' : 'invisible translate-x-full'
          }`}
        >
          <div className="container flex h-screen flex-col justify-start gap-y-8 pt-28">
            <div className="mb-2">
              <div className=" mb-2 flex items-center justify-between text-[#d9d9d9]">
                <Link to="#" className="text-lg font-bold">
                  Case Studies
                </Link>
                <ArrowDown />
              </div>
              <div className="w-screen">
                <CoverFlow />
              </div>
            </div>
            {navigation.map((item) => {
              if (item.name !== 'Case Studies')
                return (
                  <div key={item.name} className="">
                    <div
                      className="group flex cursor-pointer items-center justify-between rounded-md  text-[#d9d9d9] hover:text-secondary-400"
                      onClick={() =>
                        item.href === '#' && setOpenDropdown(!openDropdown)
                      }
                    >
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex-1 text-lg font-bold group-focus:text-secondary-400"
                        activeClassName="text-secondary-400"
                      >
                        {item.name}
                      </Link>
                      {item.children &&
                        (openDropdown ? <ArrowUp /> : <ArrowDown />)}
                    </div>
                    {item.children && (
                      <div
                        className={`mt-4  flex-col gap-y-2 transition-all duration-300 ease-in ${
                          openDropdown ? 'visible flex' : 'invisible hidden'
                        }`}
                      >
                        {item.children.map((child, idx) => (
                          <Link
                            to={child.href}
                            key={idx}
                            className="py-0.5 text-sm font-medium text-white hover:text-secondary-400"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
            })}
            <div className="mt-auto mb-10 self-center justify-self-end">
              <Button name="GET PROJECT ESTIMATION" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
