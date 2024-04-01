import { useEffect } from 'react'

export const useSticky = (id: string) => {
  useEffect(() => {
    const heroSidebar = document.getElementById('hero-sidebar')
    if (!heroSidebar) return () => {}

    const initialYPosition =
      heroSidebar.getBoundingClientRect().top + window.scrollY
    const initialXPosition = heroSidebar.getBoundingClientRect().left

    const initialTop = heroSidebar.style.top
    const initialLeft = heroSidebar.style.left
    const initialPosition = heroSidebar.style.position
    const handleScroll = () => {
      if (window.scrollY > initialYPosition) {
        heroSidebar.style.position = 'fixed'
        heroSidebar.style.top = '0px'
        heroSidebar.style.left = `${initialXPosition}px`
      } else {
        heroSidebar.style.position = initialPosition
        heroSidebar.style.top = initialTop
        heroSidebar.style.left = initialLeft
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
