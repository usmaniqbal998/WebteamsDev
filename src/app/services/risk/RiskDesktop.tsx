import Image from 'next/image'
import img from '@/assets/RiskManagement/img.svg'
import img2 from '@/assets/RiskManagement/img2-risk.svg'
import img3 from '@/assets/RiskManagement/img3-risk.svg'
import img4 from '@/assets/RiskManagement/img4-risk.svg'
import img5 from '@/assets/RiskManagement/img5-risk.svg'
import img6 from '@/assets/RiskManagement/img6-risk.svg'
import img7 from '@/assets/RiskManagement/img7-risk.svg'
import img8 from '@/assets/RiskManagement/img8-risk.svg'
import img9 from '@/assets/RiskManagement/img9-risk.svg'
import img10 from '@/assets/RiskManagement/img10-risk.svg'

export function RiskDeskktop() {
  return (
    <div className='flex flex-col items-center justify-center gap-14'>
      <h1 className='text-center text-8xl'>Risk Management Dashboard </h1>
      <Image height={1156} src={img} alt='risk1' />
      <Image height={1156} src={img2} alt='risk2' />
      <Image height={1156} src={img3} alt='risk3' />
      <Image height={1156} src={img4} alt='risk4' />
      <Image height={1156} src={img5} alt='risk5' />
      <Image height={1156} src={img6} alt='risk6' />
      <Image height={1156} src={img7} alt='risk7' />
      <Image height={1156} src={img8} alt='risk8' />
      <Image src={img9} alt='risk9' />
      <Image height={1156} src={img10} alt='risk10' />
    </div>
  )
}
