import { animate, useMotionValue, useTransform } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'

const AnimatedImage = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [60, -60])
  const rotateY = useTransform(x, [-100, 100], [-60, 60])

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect()

    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  return (
    <motion.div
      className="flex items-center justify-center"
      //   onMouseMove={handleMouse}
      //   onMouseLeave={() => {
      //     animate(x, 0)
      //     animate(y, 0)
      //   }}
    >
      <motion.svg
        style={{
          x: x,
          y: y,
          left: -25,
          top: -25,
          position: 'relative',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        drag
        dragConstraints={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileTap={{ cursor: 'grabbing' }}
        width="277"
        height="309"
        viewBox="0 0 277 309"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_123_61)">
          <path
            d="M3.06086 233.243L117.519 181.004L215.936 235.919L107.455 278.811L3.06086 233.243Z"
            fill="url(#paint0_linear_123_61)"
          />
          <path
            d="M111.498 9.64113L117.519 181.004L215.936 235.919L111.498 9.64113Z"
            fill="url(#paint1_linear_123_61)"
          />
          <path
            d="M3.06084 233.243L117.519 181.004L111.498 9.64113L3.06084 233.243Z"
            fill="url(#paint2_linear_123_61)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_123_61"
            x1="143.28"
            y1="178.172"
            x2="50.404"
            y2="332.889"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4CAF50" />
            <stop offset="0.1303" stop-color="#45A049" stop-opacity="0.8854" />
            <stop offset="0.3822" stop-color="#347837" stop-opacity="0.6636" />
            <stop offset="0.727" stop-color="#183719" stop-opacity="0.3602" />
            <stop offset="1" stop-opacity="0.12" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_123_61"
            x1="130.334"
            y1="163.007"
            x2="197.717"
            y2="82.1193"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.4289" stop-color="#4CAF50" />
            <stop offset="0.5019" stop-color="#5BB65F" />
            <stop offset="0.6432" stop-color="#83C886" />
            <stop offset="0.8364" stop-color="#C4E4C5" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_123_61"
            x1="-27.8589"
            y1="155.648"
            x2="142.614"
            y2="87.708"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3799" stop-color="#4CAF50" />
            <stop offset="0.5419" stop-color="#3DA14B" />
            <stop offset="0.8535" stop-color="#157C3E" />
            <stop offset="1" stop-color="#006837" />
          </linearGradient>
          <clipPath id="clip0_123_61">
            <rect
              width="201.145"
              height="254.561"
              fill="white"
              transform="translate(86.9463 0.781494) rotate(19.8423)"
            />
          </clipPath>
        </defs>
      </motion.svg>
    </motion.div>
  )
}

export default AnimatedImage
