import Image from 'next/image'
import img1 from '@/assets/office/desktop/img1-office.png'
import img2 from '@/assets/office/desktop/img2-office.png'
import img3 from '@/assets/office/desktop/img3-office.png'
import img4 from '@/assets/office/desktop/img4-office.png'
import img5 from '@/assets/office/desktop/img5-office.png'
import img6 from '@/assets/office/desktop/img6-office.png'
import img7 from '@/assets/office/desktop/img7-office.png'
import img8 from '@/assets/office/desktop/img8-office.png'
import img9 from '@/assets/office/desktop/img9-office.png'
import img10 from '@/assets/office/desktop/img10-office.png'
import img11 from '@/assets/office/desktop/img11-office.png'
import img12 from '@/assets/office/desktop/img12-office.png'
import img13 from '@/assets/office/desktop/img13-office.png'

export function OfficeDesktop() {
  return (
    <div className='flex max-w-full flex-col items-center justify-start gap-14'>
      <h1 className='text-center text-8xl'>Office 20 Dashboard</h1>
      <Image src={img1} alt='icon office 20 dashboard' />
      <Image src={img2} alt='icon office 20 dashboard' />
      <Image src={img3} alt='icon office 20 dashboard' />
      <Image src={img4} alt='icon office 20 dashboard' />
      <Image src={img5} alt='icon office 20 dashboard' />
      <Image src={img6} alt='icon office 20 dashboard' />
      <div className='flex size-[150%] translate-x-[8%] items-center justify-start gap-5'>
        <Image src={img7} alt='icon office 20 dashboard ' />
        <Image src={img8} alt='icon office 20 dashboard' />
      </div>
      <div className='flex size-[150%] translate-x-[-8%] items-center justify-start gap-5'>
        <Image src={img9} alt='icon office 20 dashboard' />
        <Image src={img10} alt='icon office 20 dashboard' />
      </div>
      <Image src={img11} alt='icon office 20 dashboard' />
      <Image src={img12} alt='icon office 20 dashboard' />
      <Image src={img13} alt='icon office 20 dashboard' />
    </div>
  )
}
