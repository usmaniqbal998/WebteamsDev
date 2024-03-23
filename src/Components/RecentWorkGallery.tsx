import Image from 'next/image'
import recentWork1 from '@/assets/recentWork/recentWork1.jpg'
import recentWork2 from '@/assets/recentWork/recentWork2.jpg'
import recentWork3 from '@/assets/recentWork/recentWork3.jpg'
import recentWork4 from '@/assets/recentWork/recentWork4.jpg'
import recentWork5 from '@/assets/recentWork/recentWork5.jpg'
import recentWork6 from '@/assets/recentWork/recentWork6.jpg'
import recentWork7 from '@/assets/recentWork/recentWork7.jpg'
import recentWork8 from '@/assets/recentWork/recentWork8.jpg'
import recentWork9 from '@/assets/recentWork/recentWork9.jpg'
import recentWork10 from '@/assets/recentWork/recentWork10.jpg'
import recentWork11 from '@/assets/recentWork/recentWork11.jpg'

export const RecentWorkGallery = () => {
  const imageHight = 300
  const imageClassName =
    'max-h-80 min-h-80 rounded-3xl h-[360px] w-auto sm:min-h-24 sm:max-h-24 sm:h-24 sm:rounded-md '

  return (
    <div className='relative inline w-max flex-col items-center justify-center overflow-hidden'>
      <div className='absolute size-full bg-gradient-to-b from-black/90 to-transparent'></div>
      <div className='inline-flex gap-2 overflow-hidden sm:gap-1 '>
        <Image
          src={recentWork1}
          alt='recent work 1'
          className={imageClassName}
          height={imageHight}
        />
        <Image
          src={recentWork2}
          alt='recent work 2'
          className={imageClassName}
          height={imageHight}
        />
        <Image
          src={recentWork3}
          alt='recent work 3'
          className={imageClassName}
          height={imageHight}
        />
        <Image
          src={recentWork4}
          alt='recent work 4'
          className={imageClassName}
          height={imageHight}
        />
        <Image
          src={recentWork5}
          alt='recent work 5'
          className={imageClassName}
          height={imageHight}
        />
        <Image
          src={recentWork6}
          alt='recent work 6'
          className={imageClassName}
          height={imageHight}
        />
      </div>
      <div className='flex items-center gap-2 overflow-hidden'>
        <Image
          src={recentWork7}
          alt='recent work 7'
          className={imageClassName}
          height={imageHight}
        />
        <Image
          src={recentWork8}
          alt='recent work 8'
          className={imageClassName}
          height={imageHight}
        />
        <Image
          src={recentWork9}
          alt='recent work 9'
          className={imageClassName}
          height={imageHight}
        />
        <Image
          src={recentWork10}
          alt='recent work 10'
          className={imageClassName}
          height={imageHight}
        />
        <span className='text-left text-9xl sm:text-4xl font-semibold'>
          Recent <br /> work
        </span>
        <Image
          src={recentWork11}
          alt='recent work 11'
          className={imageClassName}
          height={imageHight}
        />
      </div>
    </div>
  )
}
