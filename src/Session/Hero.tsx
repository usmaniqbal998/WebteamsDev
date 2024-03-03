import Image from 'next/image'
import heroIcon from '@/assets/hero-icon.svg'
import { BracketText } from '@/Components/BracketText'
import shopify from '@/assets/shopify-icon.svg'
import bynder from '@/assets/bynder-icon.svg'
import amazon from '@/assets/amazon-icon.svg'
import ilmiya from '@/assets/ilmiya-icon.svg'

export function Hero() {
  return (
    <div className='mt-28 flex flex-col items-center'>
      <div className='flex flex-col items-start'>
        <h1 className='text-9xl text-white'>Scalable</h1>
        <div className='flex items-center gap-36 text-9xl'>
          <Image src={heroIcon} alt='heroIcon' width={120} height={120} />
          <h1 className='text-white'>Horizons</h1>
        </div>
        <BracketText className='mt-14 w-96' />
      </div>
      <div className='mt-24 flex w-full items-center justify-between'>
        <Image src={shopify} alt='shopify-icon' height={30}></Image>
        <Image src={bynder} alt='bynder-icon' height={30}></Image>
        <Image src={amazon} alt='amazon-icon' height={30}></Image>
        <Image src={ilmiya} alt='ilmiya-icon' height={30}></Image>
      </div>
    </div>
  )
}