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
      <div className='flex flex-col items-center text-[209px] leading-[0.90] sm:text-6xl'>
        <h1 className='self-start text-white'>Scalable</h1>
        <div className='flex items-center gap-64 sm:gap-5'>
          <Image
            src={heroIcon}
            alt='heroIcon'
            width={162}
            height={162}
            className='sm:size-12'
            priority
          />
          <h1 className='text-white'>Horizons</h1>
        </div>
        <BracketText className='mt-16 w-96 self-start' />
      </div>
      <div className='mt-36 flex w-screen min-w-[100vw] items-center justify-between px-40 sm:mt-8 sm:px-4'>
        <Image
          src={shopify}
          alt='shopify-icon'
          height={40}
          className='sm:h-4'
        ></Image>
        <Image
          src={bynder}
          alt='bynder-icon'
          height={40}
          className='sm:h-4'
        ></Image>
        <Image
          src={amazon}
          alt='amazon-icon'
          height={40}
          className='sm:h-4'
        ></Image>
        <Image
          src={ilmiya}
          alt='ilmiya-icon'
          height={40}
          className='sm:h-4'
        ></Image>
      </div>
    </div>
  )
}
