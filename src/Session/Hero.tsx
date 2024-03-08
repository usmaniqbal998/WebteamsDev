import Image from 'next/image'
import heroIcon from '@/assets/hero-icon.svg'
import { BracketText } from '@/Components/BracketText'
import shopify from '@/assets/shopify-icon.svg'
import bynder from '@/assets/bynder-icon.svg'
import amazon from '@/assets/amazon-icon.svg'
import ilmiya from '@/assets/ilmiya-icon.svg'
import { cn } from '@/Util'

export function Hero(props: { className?: string }) {
  return (
    <div
      className={cn(
        'flex w-full max-w-full flex-col items-center',
        props.className
      )}
    >
      <div className='flex flex-col items-center text-9xl sm:text-6xl'>
        <h1 className='self-start text-white'>Scalable</h1>
        <div className='flex items-center gap-36 sm:gap-5'>
          <Image
            src={heroIcon}
            alt='heroIcon'
            width={120}
            height={120}
            className='sm:size-12'
            priority
          />
          <h1 className='text-white'>Horizons</h1>
        </div>
        <BracketText className='mt-14 w-96 self-start' />
      </div>
      <div className='mt-24 flex min-w-full max-w-full items-center justify-evenly sm:mt-12'>
        <Image
          src={shopify}
          alt='shopify-icon'
          height={30}
          className='sm:h-4'
        ></Image>
        <Image
          src={bynder}
          alt='bynder-icon'
          height={30}
          className='sm:h-4'
        ></Image>
        <Image
          src={amazon}
          alt='amazon-icon'
          height={30}
          className='sm:h-4'
        ></Image>
        <Image
          src={ilmiya}
          alt='ilmiya-icon'
          height={30}
          className='sm:h-4'
        ></Image>
      </div>
    </div>
  )
}
