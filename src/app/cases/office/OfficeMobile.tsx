import Image from 'next/image'
import img1 from '@/assets/office/mobile/img1-mobile.svg'
import img2 from '@/assets/office/mobile/img2-mobile.png'
import img3 from '@/assets/office/mobile/img3-mobile.png'
import img4 from '@/assets/office/mobile/img4-mobile.png'
import img5 from '@/assets/office/mobile/img5-mobile.png'
import img6 from '@/assets/office/mobile/img6-mobile.png'
import img7 from '@/assets/office/mobile/img7-mobile.png'
import img8 from '@/assets/office/mobile/img8-mobile.png'
import img9 from '@/assets/office/mobile/img9-mobile.png'
import img10 from '@/assets/office/mobile/img10-mobile.png'
import img11 from '@/assets/office/mobile/img11-mobile.png'
import img12 from '@/assets/office/mobile/img12-mobile.png'
import img13 from '@/assets/office/mobile/img13-mobile.png'
import img14 from '@/assets/office/mobile/img14-mobile.png'

export const OfficeMobile = () => {
  return (
    <div className='w-full'>
      <h1 className='mb-6 text-center text-6xl'>Office 20 Dashboard</h1>
      <div className='flex w-full max-w-full flex-col items-center justify-start gap-10'>
        <Image
          className='w-full'
          height={1228}
          src={img1}
          alt='icon office 20 dashboard'
        />
        <Image
          className='w-full'
          height={1228}
          src={img2}
          alt='icon office 20 dashboard'
        />
        <Image
          className='w-full'
          height={1228}
          src={img3}
          alt='icon office 20 dashboard'
        />
        <Image
          className='w-full'
          height={1228}
          src={img4}
          alt='icon office 20 dashboard'
        />
        <Image
          className='w-full'
          height={1228}
          src={img5}
          alt='icon office 20 dashboard'
        />
        <Image
          className='w-full'
          height={1228}
          src={img6}
          alt='icon office 20 dashboard'
        />
        <div className='flex size-[150%] translate-x-[12%] items-center justify-start gap-1'>
          <Image
            className='size-10/12 h-auto'
            height={1228}
            src={img7}
            alt='icon office 20 dashboard'
          />
          <Image
            className='size-10/12 h-auto'
            height={1228}
            src={img8}
            alt='icon office 20 dashboard'
          />
        </div>
        <div className='flex size-[150%] translate-x-[-12%] items-center justify-start gap-0'>
          <Image
            className='size-10/12 h-auto'
            height={1228}
            src={img9}
            alt='icon office 20 dashboard'
          />
          <Image
            className='size-10/12 h-auto'
            height={1228}
            src={img10}
            alt='icon office 20 dashboard'
          />
        </div>
        <Image
          className='w-full'
          height={1228}
          src={img11}
          alt='icon office 20 dashboard'
        />
        <Image
          className='w-full'
          height={1228}
          src={img12}
          alt='icon office 20 dashboard'
        />
        <Image
          className='w-full'
          height={1228}
          src={img13}
          alt='icon office 20 dashboard'
        />
        <Image
          className='w-full'
          height={1228}
          src={img14}
          alt='icon office 20 dashboard'
        />
      </div>
    </div>
  )
}
