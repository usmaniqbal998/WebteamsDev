import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import CoverFlow from './organisms/CoverFlow'
import Button from './atoms/Button'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    children: [
      { name: 'Web App Development', href: '#' },
      { name: 'Mobile App Development', href: '#' },
      { name: 'Ui/Ux Design', href: '#' },
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
          <div className="lg:basis-1/4">
            <Link to="/">
              <StaticImage
                src="../images/logo.svg"
                width={130}
                alt="Logo Web Teams"
              />
            </Link>
          </div>

          <div className="mx-auto hidden basis-1/2 lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                activeClassName="text-secondary-400"
                className="group relative pb-2 font-sans font-bold text-[#d9d9d9] transition-colors duration-300 ease-in hover:text-secondary-400 lg:text-lg xl:text-xl"
              >
                {item.name}
                <span className="absolute inset-x-1/2 bottom-0 border-b-2 border-transparent transition-all duration-300 ease-in group-hover:inset-x-3 group-hover:border-secondary-400" />
              </Link>
            ))}
          </div>
          <div className="hidden basis-1/4 justify-end lg:flex">
            <button
              type="button"
              className="flex h-[52px] w-[52px]  items-center justify-center rounded-full bg-white text-black transition-colors duration-300 ease-in hover:bg-secondary-400"
            >
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8516 1.01001C11.8516 0.457725 11.4038 0.0100098 10.8516 0.0100098L1.85156 0.0100097C1.29928 0.0100097 0.851563 0.457725 0.851563 1.01001C0.851563 1.56229 1.29928 2.01001 1.85156 2.01001L9.85156 2.01001L9.85156 10.01C9.85156 10.5623 10.2993 11.01 10.8516 11.01C11.4038 11.01 11.8516 10.5623 11.8516 10.01L11.8516 1.01001ZM3.04254 10.2332L11.5587 1.71712L10.1445 0.302903L1.62833 8.81903L3.04254 10.2332Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div
            id="mobileNavBtn"
            className={`flex w-8  flex-col items-end transition-all duration-300 lg:hidden ${
              navOpen ? '-translate-y-px rotate-90' : ''
            }`}
            onClick={() => {
              setNavOpen(!navOpen)
            }}
          >
            <div
              className={`h-0.5 w-full border border-solid border-white transition-all duration-500 ${
                navOpen
                  ? 'translate-y-0 rotate-45'
                  : 'translate-y-[-5px] rotate-0'
              }`}
            ></div>
            <div
              className={`h-0.5 border border-solid border-white transition-all duration-500 ${
                navOpen
                  ? 'w-full -translate-y-0.5 -rotate-45'
                  : 'w-1/2 translate-y-[5px] rotate-0'
              }`}
            ></div>
          </div>
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
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.2468 8.11423L1.11108 1.97852"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.24677 8.1142L1.11108 14.2499"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
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
                        className="text-lg font-bold  group-focus:text-secondary-400"
                      >
                        {item.name}
                      </Link>
                      {item.children &&
                        (openDropdown ? (
                          <svg
                            width="16"
                            height="9"
                            viewBox="0 0 16 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.88284 7.66049L14.0186 1.52478"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7.88275 7.66046L1.74707 1.52478"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.2468 8.11423L1.11108 1.97852"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7.24677 8.1142L1.11108 14.2499"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ))}
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
