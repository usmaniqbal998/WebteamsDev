import Image from 'next/image'
import img1 from '@/assets/office/img1-office.png'
import img2 from '@/assets/office/img2-office.png'
import img3 from '@/assets/office/img3-office.png'
import img4 from '@/assets/office/img4-office.png'
import img5 from '@/assets/office/img5-office.png'
import img6 from '@/assets/office/img6-office.png'
import img7 from '@/assets/office/img7-office.png'
import img8 from '@/assets/office/img8-office.png'
import img9 from '@/assets/office/img9-office.png'
import img10 from '@/assets/office/img10-office.png'
import img11 from '@/assets/office/img11-office.png'
import img12 from '@/assets/office/img12-office.png'
import img13 from '@/assets/office/img13-office.png'

export function OfficeDesktop() {
  return (
    <div className='flex max-w-full flex-col items-center justify-start gap-14'>
      <h1 className='text-center text-8xl'>Office 20 Dashboard</h1>
      <Image
        className='w-auto'
        height={1228}
        src={img1}
        alt='icon office 20 dashboard'
      />
      <Image
        className='w-auto'
        height={1228}
        src={img2}
        alt='icon office 20 dashboard'
      />
      <Image
        className='w-auto'
        height={1228}
        src={img3}
        alt='icon office 20 dashboard'
      />
      <Image
        className='w-auto'
        height={1228}
        src={img4}
        alt='icon office 20 dashboard'
      />
      <Image
        className='w-auto'
        height={1228}
        src={img5}
        alt='icon office 20 dashboard'
      />
      <Image
        className='w-auto'
        height={1228}
        src={img6}
        alt='icon office 20 dashboard'
      />
      <div className='flex w-screen items-center justify-start gap-5'>
        <Image
          height={1228}
          className='size-10/12 h-auto'
          src={img7}
          alt='icon office 20 dashboard '
        />
        <Image
          height={1228}
          className='size-10/12 h-auto'
          src={img8}
          alt='icon office 20 dashboard'
        />
      </div>
      <div className='flex w-screen -translate-x-96 items-center justify-start gap-5'>
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
      <Image src={img11} alt='icon office 20 dashboard' />
      <Image src={img12} alt='icon office 20 dashboard' />
      <Image src={img13} alt='icon office 20 dashboard' />
    </div>
  )
}
