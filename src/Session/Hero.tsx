import Image from 'next/image'
import heroIcon from '@/assets/hero-icon.svg'
import { BracketText } from '@/Components/BracketText'
import shopify from '@/assets/shopify-icon.svg'
import bynder from '@/assets/bynder-icon.svg'
import amazon from '@/assets/amazon-icon.svg'
import ilmiya from '@/assets/ilmiya-icon.svg'

export function Hero() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-start'>
        <h1 className='text-9xl text-white'>Scalable</h1>
        <div className='flex items-center gap-28 text-9xl'>
          <Image src={heroIcon} alt='heroIcon' width={120} height={120} />
          <h1 className='text-white'>Horizon</h1>
        </div>
      </div>
      <BracketText />
      <div>
        <Image src={shopify} alt='shopify-icon' width={138} height={40}></Image>
        <Image src={bynder} alt='bynder-icon' width={180} height={40}></Image>
        <Image src={amazon} alt='amazon-icon' width={132} height={40}></Image>
        <Image src={ilmiya} alt='ilmiya-icon' width={142} height={40}></Image>
      </div>
    </div>
  )
}
