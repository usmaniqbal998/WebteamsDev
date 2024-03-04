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
  return (
    <div className='inline w-max flex-col items-center justify-center overflow-hidden'>
      <div className='inline-flex gap-2 overflow-hidden '>
        <Image
          src={recentWork1}
          alt='recent work 1'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <Image
          src={recentWork2}
          alt='recent work 2'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <Image
          src={recentWork3}
          alt='recent work 3'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <Image
          src={recentWork4}
          alt='recent work 4'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <Image
          src={recentWork5}
          alt='recent work 5'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <Image
          src={recentWork6}
          alt='recent work 6'
          className='max-h-80 min-h-80 rounded-3xl'
        />
      </div>
      <div className='flex items-center gap-2 overflow-hidden'>
        <Image
          src={recentWork7}
          alt='recent work 7'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <Image
          src={recentWork8}
          alt='recent work 8'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <Image
          src={recentWork9}
          alt='recent work 9'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <Image
          src={recentWork10}
          alt='recent work 10'
          className='max-h-80 min-h-80 rounded-3xl'
        />
        <span className='text-9xl'>
          Recent <br /> work
        </span>
        <Image
          src={recentWork11}
          alt='recent work 11'
          className='max-h-80 min-h-80 rounded-3xl'
        />
      </div>
    </div>
  )
}
