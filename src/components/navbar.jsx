import React from 'react'
import { Link } from 'gatsby'
import CoverFlow from './organisms/CoverFlow'
import Button from './atoms/Button'
import {
  AroowTopRight,
  ArrowDown,
  ArrowUp,
  AtomsIcon,
  CaretFillDown,
} from '../utils/icons'
import Typography from './atoms/Text'
import Logo from '../utils/Logo'
// import { motion } from 'framer-motion'
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
// const megaMenuAnimation =  {
//   hidden: {
//     opacity: 0,
//     x: '100vw'
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { type: 'spring', delay: 0.5 }
//   },
// }

const Nav = () => {
  const [navOpen, setNavOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = React.useState(false)
  const [asPath, setAsPath] = React.useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    const asPathVal = window.location.pathname
    setAsPath(asPathVal)

    return () => {
      setAsPath('')
    }
  })

  React.useEffect(() => {
    return () => {
      setNavOpen(false)
    }
  }, [])

  const handleClick = () => {
    setMegaMenuOpen(false)
  }
  return (
    <div
      className={`${navOpen ? 'fixed inset-0 z-30 lg:relative' : 'relative'} ${
        asPath === '/about' ? 'bg-[#282828]' : 'bg-primary-700'
      }`}
    >
      <nav className="container">
        <div className="relative z-30 flex items-center justify-between py-5 md:static md:bg-transparent md:py-10">
          <div className="lg:basis-1/5">
            <Link to="/">
              <Logo className="h-[33px] w-[124px] md:h-[46px] md:w-[183px]" />
            </Link>
          </div>

          <div className="mx-auto hidden basis-3/5 lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <li
                key={item.name}
                className="group h-full list-none lg:py-3"
                onMouseEnter={() => {
                  item.children && setMegaMenuOpen(true)
                }}
                onMouseLeave={item.children && handleClick}
              >
                <Link
                  to={item.href}
                  activeClassName="activeClassNav"
                  className="relative inline-flex pb-2 font-sans font-bold text-[#d9d9d9] transition-colors duration-300 ease-in group-hover:text-secondary-400 lg:text-lg xl:text-xl"
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
                  <span className="invisible absolute inset-x-full bottom-0 border-b-2 border-transparent transition-all duration-300 ease-in group-hover:visible group-hover:inset-x-3 group-hover:border-secondary-400" />
                </Link>
                {item.children && megaMenuOpen && (
                  <div
                    className={` absolute inset-x-0 top-24 z-40 w-full rounded-sm bg-primary-700 shadow-2xl transition-all duration-500 ease-in 
                  ${!megaMenuOpen ? 'invisible  ' : 'visible '}
                  `}
                  >
                    {/* {item.children.map((child, idx) => (
                      <li className=" list-none">
                        <Link
                          to={child.href}
                          key={idx}
                          className="block py-3 px-4 text-sm font-medium transition-all  duration-300 ease-in hover:text-secondary-400"
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))} */}
                    <div className="container pt-12 pb-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <Typography
                            variant="h5"
                            className="text-[20px] font-semibold leading-[24px]"
                          >
                            Team of Experts
                          </Typography>
                          <Button
                            onClick={handleClick}
                            className="my-10 rounded-md border bg-transparent py-[13px] px-[31px] transition-all duration-300 ease-in hover:border-secondary-400 hover:bg-secondary-400 hover:text-black focus:border-secondary-400 focus:bg-secondary-400 focus:text-black"
                          >
                            GET QUOTATION
                          </Button>
                        </div>
                        <AtomsIcon />
                      </div>
                      <div className="grid grid-cols-2 gap-10">
                        <div className="max-w-[80%]">
                          <Typography
                            variant="p"
                            className="block  border-b py-5 text-[14px] font-medium leading-[120%]"
                          >
                            Development
                          </Typography>

                          <div className="mt-4 -ml-4 flex items-center justify-between gap-5">
                            <Link
                              to="/services/web-app-development"
                              onClick={handleClick}
                              className="rounded-md p-4 text-[14px] font-medium leading-[21px] transition-colors duration-300 ease-in hover:bg-[#222222]"
                            >
                              Web App Development
                              <Typography
                                variant="p"
                                className="block pt-2 text-[12px] leading-[18px]"
                              >
                                Java, Html-Css, Angular
                              </Typography>
                            </Link>
                            <Link
                              to="/services/mobile-app-development"
                              onClick={handleClick}
                              className="rounded-md p-4 text-[14px] font-medium leading-[21px] transition-colors duration-300 ease-in hover:bg-[#222222]"
                            >
                              Mobile App Development
                              <Typography
                                variant="span"
                                className="block pt-2 text-[12px] leading-[18px]"
                              >
                                Android, IOS
                              </Typography>
                            </Link>
                          </div>
                        </div>
                        <div className="max-w-[80%]">
                          <Typography
                            variant="p"
                            className="block  border-b py-5 text-[14px] font-medium leading-[120%]"
                          >
                            Design
                          </Typography>

                          <div className="mt-4 -ml-4 flex items-center justify-between gap-5">
                            <Link
                              to="/services/ui-ux-design"
                              onClick={handleClick}
                              className="rounded-md p-4 text-[14px] font-medium leading-[21px] transition-colors duration-300 ease-in hover:bg-[#222222]"
                            >
                              Ui/Ux Design
                              <Typography
                                variant="p"
                                className="block pt-2 text-[12px] leading-[18px]"
                              >
                                User Flows, Prototype
                              </Typography>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </div>
          <div className="hidden basis-1/5 justify-end lg:flex">
            <Link to="/contact">
              <Button className="flex h-[52px] w-[52px]  items-center justify-center rounded-full bg-white text-black transition-colors duration-300 ease-in hover:bg-secondary-400">
                <AroowTopRight />
              </Button>
            </Link>
          </div>
          <Button
            id="mobileNavBtn"
            type="button"
            className={`flex h-8 w-8 flex-col items-end justify-center transition-all duration-300 hover:border-secondary-500 lg:hidden ${
              navOpen ? '-translate-y-px rotate-90' : ''
            }`}
            onClick={() => {
              setNavOpen(!navOpen)
            }}
          >
            <span
              className={`h-0.5 w-full border border-solid border-current transition-all duration-500 ${
                navOpen
                  ? 'translate-y-0 rotate-45'
                  : 'translate-y-[-5px] rotate-0'
              }`}
            />
            <span
              className={`h-0.5 border border-solid border-current transition-all duration-500 ${
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
            <div className="mb-2 text-[#d9d9d9]">
              <Link
                to="/case-studies"
                className=" mb-2 flex items-center justify-between text-lg font-bold   hover:text-secondary-400"
                activeClassName="text-secondary-400"
                onClick={() => setNavOpen(false)}
              >
                Case Studies
                <ArrowDown />
              </Link>
              <div className="w-screen">
                <CoverFlow />
              </div>
            </div>
            {navigation.map((item, idx) => {
              if (item.name !== 'Case Studies')
                return (
                  <div key={idx}>
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
                        onClick={() => item.href !== '#' && setNavOpen(false)}
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
                            className="py-0.5 text-sm font-medium hover:text-secondary-400"
                            activeClassName="text-secondary-400"
                            onClick={() => setNavOpen(false)}
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
