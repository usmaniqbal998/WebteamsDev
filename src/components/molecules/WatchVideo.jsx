import React from 'react'
import Typography from '../atoms/Text'
import { PlayIcon } from '../../utils/icons'
import { motion } from 'framer-motion'

const WatchVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:pl-20">
      <motion.button
        animate={{ scale: 1.1 }}
        transition={{
          ease: 'linear',
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <PlayIcon />
      </motion.button>
      <Typography variant="p" className="relative  text-xl italic text-white">
        Watch Video
        <Typography
          variant="span"
          className="absolute left-0 -bottom-1.5 right-10 h-0.5 bg-secondary-400"
        />
      </Typography>
    </div>
  )
}

export default WatchVideo
