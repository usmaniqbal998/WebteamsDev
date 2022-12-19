import React from 'react'

const WatchVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:pl-20">
      <button>
        <svg
          width="180"
          height="180"
          viewBox="0 0 232 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="115.924"
            cy="110.398"
            r="80.5802"
            stroke="#CCCCCC"
            strokeWidth="0.5"
          />
          <g filter="url(#filter0_f_127_44)">
            <circle cx="115.924" cy="115.691" r="58.4756" fill="#2A622C" />
          </g>
          <path
            d="M139.65 107.8C141.65 108.955 141.65 111.841 139.65 112.996L106.311 132.244C104.311 133.399 101.811 131.956 101.811 129.646L101.811 91.1496C101.811 88.8402 104.311 87.3969 106.311 88.5516L139.65 107.8Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_f_127_44"
              x="0.448563"
              y="0.215698"
              width="230.951"
              height="230.951"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="28.5"
                result="effect1_foregroundBlur_127_44"
              />
            </filter>
          </defs>
        </svg>
      </button>
      <p className="relative  text-xl italic text-white">
        Watch Video
        <span className="absolute left-0 -bottom-1.5 right-10 h-0.5 bg-secondary-400" />
      </p>
    </div>
  )
}

export default WatchVideo
