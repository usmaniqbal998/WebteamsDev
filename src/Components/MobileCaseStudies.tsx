'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/Components/ui/carousel'
import Image from 'next/image'
import studyCase1 from '@/assets/menu/casestudy1.png'
import studyCase2 from '@/assets/menu/casestudy2.png'
import studyCase3 from '@/assets/menu/casestudy3.png'
import studyCase4 from '@/assets/menu/casestudy4.png'
import Link from 'next/link'
import { SheetClose } from '@/Components/ui/sheet'
import { useMediaQuery } from 'react-responsive'

export const StudyCase = (props: {
  src: Parameters<typeof Image>[0]['src']
  alt: string
  height?: number
  href: string
}) => {
  const isMobile = useMediaQuery({ maxWidth: 676 })

  return (
    <CarouselItem>
      {isMobile ? (
        <SheetClose asChild>
          <Link
            href={props.href}
            className=' flex size-full items-center justify-center  p-3'
          >
            <Image
              src={props.src}
              alt={props.alt}
              height={props.height}
              className='shadow-border drop-shadow-lg'
              unoptimized
            ></Image>
          </Link>
        </SheetClose>
      ) : (
        <Link
          href={props.href}
          className='flex size-full items-center justify-center  p-3'
        >
          <Image src={props.src} alt={props.alt}></Image>
        </Link>
      )}
    </CarouselItem>
  )
}

export const MobileCaseStudies = (props: {
  height?: number
  scale?: number
}) => {
  return (
    <Carousel>
      <CarouselContent
        style={{
          width: `${props.scale ?? 70}%`
        }}
      >
        <StudyCase
          href='/cases/risk'
          src={studyCase1}
          height={props.height}
          alt='study case 1'
        />
        <StudyCase
          href='/cases/ilmiya'
          src={studyCase2}
          height={props.height}
          alt='study case 2'
        />
        <StudyCase
          href='/cases/baton'
          src={studyCase3}
          height={props.height}
          alt='study case 3'
        />
        <StudyCase
          href='/cases/office'
          src={studyCase4}
          height={props.height}
          alt='study case 4'
        />
      </CarouselContent>
    </Carousel>
  )
}
