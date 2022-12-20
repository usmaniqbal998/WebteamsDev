import React, { useContext, useEffect } from 'react'
import CustomCursorContext from './context/CustomCursorContext'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { CursorIcon } from '../../utils/icons'

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <motion.div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`cursor-${type} border-primary-50ß pointer-events-none fixed left-0 top-0 z-50 flex h-8 w-8 items-center  justify-center rounded-full border-[0.5px]`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <CursorIcon />
    </motion.div>
  )
}

export default CustomCursor
