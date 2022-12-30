import React, { useContext, useEffect, useState } from 'react'
import CustomCursorContext from './context/CustomCursorContext'
import { motion } from 'framer-motion'
import { CursorIcon } from '../../utils/icons'

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext)
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  }
  return (
    <motion.div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`mix-blend-differnece pointer-events-none fixed left-0 top-0 z-50 hidden h-8  w-8 items-center justify-center  rounded-full border-[0.5px] border-primary-500 md:flex`}
      variants={variants}
      animate={type}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
    >
      <CursorIcon />
    </motion.div>
  )
}

export default CustomCursor
