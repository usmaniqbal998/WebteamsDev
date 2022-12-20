/* eslint-disable vars-on-top */
import React, { useEffect } from 'react'
import Typography from '../atoms/Text'
import Scrollspy from 'react-scrollspy'

const SideNav = ({ id = 1, aboutPage = false }) => {
  useEffect(() => {
    const stickyElem = document.querySelector('div.sidenav')
    const currStickyPos =
      stickyElem.getBoundingClientRect().top + window.pageYOffset
    window.onscroll = function () {
      if (window.pageYOffset > currStickyPos) {
        stickyElem.classList.add('aside-fixed')
      } else {
        stickyElem.classList.remove('aside-fixed')
      }
    }
  }, [])

  const sideNavItems = [
    {
      name: 'Brief',
      href: 'brief',
    },
    { name: aboutPage ? 'Values' : 'Process', href: 'process' },
    { name: aboutPage ? 'Team' : 'Projects', href: 'projects' },
  ]
  return (
    <aside className="mx-auto w-full lg:col-span-2 lg:pt-5">
      <div className="sidenav">
        <Scrollspy
          items={[`brief-${id}`, `process-${id}`, `project-${id}`]}
          currentClassName="text-secondary-300 border-secondary-300"
          offset={-20}
        >
          {sideNavItems.map((item) => (
            <li
              key={item.href}
              className="group relative font-bold leading-[24px] lg:text-[20px]"
            >
              <Typography
                variant="a"
                href={`#${item.href}-${id}`}
                color="current"
                className="block border-current px-1 py-2 transition-colors duration-300 ease-in group-hover:border-secondary-300 group-hover:text-secondary-300 lg:border-l-2 lg:px-4 lg:py-1"
              >
                {item.name}
              </Typography>
              <span className="absolute inset-x-1/3 -top-2 border-t-2 border-current transition-all duration-300 ease-in group-hover:border-secondary-300 lg:inset-x-1/2" />
            </li>
          ))}
        </Scrollspy>
      </div>
    </aside>
  )
}

export default SideNav
