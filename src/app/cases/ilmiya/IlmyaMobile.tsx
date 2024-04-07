import Image from 'next/image'
import img1 from '@/assets/ilmya/mobile/img1-mobile.svg'
import img2 from '@/assets/ilmya/mobile/img2-mobile.png'
import img3 from '@/assets/ilmya/mobile/img3-mobile.png'
import img4 from '@/assets/ilmya/mobile/img4-mobile.png'
import img5 from '@/assets/ilmya/mobile/img5-mobile.png'
import img6 from '@/assets/ilmya/mobile/img6-mobile.png'
import img7 from '@/assets/ilmya/mobile/img7-mobile.png'
import img8 from '@/assets/ilmya/mobile/img8-mobile.png'
import img9 from '@/assets/ilmya/mobile/img9-mobile.png'
import img10 from '@/assets/ilmya/mobile/img10-mobile.png'
import img11 from '@/assets/ilmya/mobile/img11-mobile.png'

export const IlmyaMobile = () => {
  return (
    <div className='flex max-w-full flex-col items-center justify-start'>
      <h1 className='mb-16 text-center text-6xl'>Ilmiya Edtech Platform</h1>
      <div className='flex w-full min-w-full flex-col items-center justify-start gap-10'>
        <Image
          className='w-full'
          height={1156}
          src={img1}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img2}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img3}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img4}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img5}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img6}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img7}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img8}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img9}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img10}
          alt='icon ilmya edtech platform'
        />
        <Image
          className='w-full'
          height={1156}
          src={img11}
          alt='icon ilmya edtech platform'
        />
      </div>
    </div>
  )
}
