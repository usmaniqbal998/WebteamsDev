import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/Components/ui/carousel'
import Image from 'next/image'
import studyCase1 from '@/assets/study-case/study-case-1.svg'
import studyCase2 from '@/assets/study-case/study-case-2.svg'
import studyCase3 from '@/assets/study-case/study-case-3.svg'
import studyCase4 from '@/assets/study-case/study-case-4.svg'
import Link from 'next/link'

export const StudyCase = (props: {
  src: Parameters<typeof Image>[0]['src']
  alt: string
  height?: number
  href: string
}) => {
  return (
    <CarouselItem>
      <Link
        href={props.href}
        className=' flex size-full items-center justify-center bg-neutral-100 p-3'
      >
        <Image
          src={props.src}
          alt={props.alt}
          height={props.height}
          className='shadow-border drop-shadow-lg'
        ></Image>
      </Link>
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
          width: `${props.scale ?? 90}%`
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
