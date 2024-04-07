import Image from 'next/image'
import img1 from '@/assets/risk/mobile/img1-mobile.svg'
import img2 from '@/assets/risk/mobile/img2-mobile.png'
import img3 from '@/assets/risk/mobile/img3-mobile.png'
import img4 from '@/assets/risk/mobile/img4-mobile.png'
import img5 from '@/assets/risk/mobile/img5-mobile.png'
import img6 from '@/assets/risk/mobile/img6-mobile.png'
import img7 from '@/assets/risk/mobile/img7-mobile.png'
import img8 from '@/assets/risk/mobile/img8-mobile.png'
import img9 from '@/assets/risk/mobile/img9-mobile.png'
import img10 from '@/assets/risk/mobile/img10-mobile.svg'
import img11 from '@/assets/risk/mobile/img11-mobile.png'

export const RiskMobile = () => {
  return (
    <div className=' w-full '>
      <h1 className='mb-16 text-center text-6xl'>Risk Assessment Dashboard</h1>
      <div className='flex w-full min-w-full flex-col items-center justify-start gap-14'>
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img1}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img2}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img3}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img4}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img5}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img6}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img7}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img8}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img9}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img10}
          alt='risk assessment dashboard'
        />
        <Image
          width={700}
          className='h-auto w-full min-w-full '
          src={img11}
          alt='risk assessment dashboard'
        />
      </div>
    </div>
  )
}
