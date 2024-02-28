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

export const StudyCase = (props: {
  src: Parameters<typeof Image>[0]['src']
  alt: string
}) => {
  return (
    <CarouselItem>
      <div className=' flex size-full items-center justify-center rounded-md bg-neutral-100 p-3'>
        <Image
          src={props.src}
          alt={props.alt}
          className='shadow-border drop-shadow-lg'
        ></Image>
      </div>
    </CarouselItem>
  )
}

export const MobileCaseStudies = () => {
  return (
    <Carousel>
      <CarouselContent className='[width:90%]'>
        <StudyCase src={studyCase1} alt='study case 1' />
        <StudyCase src={studyCase2} alt='study case 2' />
        <StudyCase src={studyCase3} alt='study case 3' />
        <StudyCase src={studyCase4} alt='study case 4' />
      </CarouselContent>
    </Carousel>
  )
}
