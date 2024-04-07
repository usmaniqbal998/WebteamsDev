import Image from 'next/image'
import img from '@/assets/risk/desktop/img.png'
import img2 from '@/assets/risk/desktop/img2-risk.png'
import img3 from '@/assets/risk/desktop/img3-risk.png'
import img4 from '@/assets/risk/desktop/img4-risk.png'
import img5 from '@/assets/risk/desktop/img5-risk.png'
import img6 from '@/assets/risk/desktop/img6-risk.png'
import img7 from '@/assets/risk/desktop/img7-risk.png'
import img8 from '@/assets/risk/desktop/img8-risk.png'
import img9 from '@/assets/risk/desktop/img9-risk.png'
import img10 from '@/assets/risk/desktop/img10-risk.png'

export function RiskDesktop() {
  return (
    <div className='flex max-w-full flex-col items-center justify-start gap-14'>
      <h1 className='text-center text-8xl'>Risk Management Dashboard </h1>
      <Image className='w-auto' height={1156} src={img} alt='risk1' />
      <Image className='w-auto' height={1156} src={img2} alt='risk2' />
      <Image className='w-auto' height={1156} src={img3} alt='risk3' />
      <Image className='w-auto' height={1156} src={img4} alt='risk4' />
      <Image className='w-auto' height={1156} src={img5} alt='risk5' />
      <Image className='w-auto' height={1156} src={img6} alt='risk6' />
      <Image className='w-auto' height={1156} src={img7} alt='risk7' />
      <Image className='w-auto' height={1156} src={img8} alt='risk8' />
      <Image className='w-full' height={3000} src={img9} alt='risk9' />
      <Image className='w-auto' height={1156} src={img10} alt='risk10' />
    </div>
  )
}
