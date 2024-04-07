import Image from 'next/image'
import img1 from '@/assets/ilmya/desktop/img1-ilmya.png'
import img2 from '@/assets/ilmya/desktop/img2-ilmya.png'
import img3 from '@/assets/ilmya/desktop/img3-ilmya.png'
import img4 from '@/assets/ilmya/desktop/img4-ilmya.png'
import img5 from '@/assets/ilmya/desktop/img5-ilmya.png'
import img6 from '@/assets/ilmya/desktop/img6-ilmya.png'
import img7 from '@/assets/ilmya/desktop/img7-ilmya.png'
import img8 from '@/assets/ilmya/desktop/img8-ilmya.png'
import img9 from '@/assets/ilmya/desktop/img9-ilmya.png'
import img10 from '@/assets/ilmya/desktop/img10-ilmya.png'

export function IlmyaDesktop() {
  return (
    <div className='flex max-w-full flex-col items-center justify-center gap-14'>
      <h1 className='text-center text-8xl'>Ilmiya Edtech Platform</h1>
      <Image
        className='w-auto'
        height={1156}
        src={img1}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img2}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img3}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img4}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='min-w-full'
        height={1156}
        src={img5}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img6}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img7}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img8}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img9}
        alt='icon ilmya edtech platform'
      />
      <Image
        className='min-w-full'
        height={1156}
        src={img10}
        alt='icon ilmya edtech platform'
      />
    </div>
  )
}
