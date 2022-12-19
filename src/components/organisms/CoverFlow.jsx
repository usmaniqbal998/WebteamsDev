import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { StaticImage } from 'gatsby-plugin-image'

const CoverFlow = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={15}
      grabCursor={true}
      rewind={true}
      // centeredSlides={true}
      pagination={false}
      breakpoints={{
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
    >
      <SwiperSlide>
        <StaticImage
          placeholder="blurred"
          src="../../images/caseStudies/task-mgmt.png"
          alt="Case Study 1"
          className="coverFlowImage"
        />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage
          placeholder="blurred"
          src="../../images/caseStudies/multi-coffee-shops.png"
          alt="Case Study 2"
          className="coverFlowImage"
        />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage
          placeholder="blurred"
          src="../../images/caseStudies/design-system.png"
          alt="Case Study 1"
          className="coverFlowImage"
        />
      </SwiperSlide>
      <SwiperSlide>
        <StaticImage
          placeholder="blurred"
          src="../../images/caseStudies/aflash-edtech.png"
          alt="Case Study 2"
          className="coverFlowImage"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default CoverFlow
