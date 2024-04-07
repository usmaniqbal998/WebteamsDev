import Image from 'next/image'
import img1 from '@/assets/baton/mobile/img1-mobile.svg'
import img2 from '@/assets/baton/mobile/img2-mobile.png'
import img3 from '@/assets/baton/mobile/img3-mobile.png'
import img4 from '@/assets/baton/mobile/img4-mobile.png'
import img5 from '@/assets/baton/mobile/img5-mobile.png'
import img6 from '@/assets/baton/mobile/img6-mobile.png'
import img7 from '@/assets/baton/mobile/img7-mobile.png'
import img8 from '@/assets/baton/mobile/img8-mobile.png'
import img9 from '@/assets/baton/mobile/img9-mobile.png'
import img10 from '@/assets/baton/mobile/img10-mobile.png'
import img11 from '@/assets/baton/mobile/img11-mobile.png'

export const BatonMobile = () => {
  return (
    <div className='flex max-w-full flex-col items-center justify-start'>
      <h1 className='mb-16 text-center text-6xl'>Baton Team Management</h1>
      <div className='flex max-w-full flex-col items-center justify-start gap-10 '>
        <Image
          className='w-full'
          height={1156}
          src={img1}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={600}
          src={img2}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={1156}
          src={img3}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={1156}
          src={img4}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={1156}
          src={img5}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='min-w-[100vw]'
          height={1156}
          src={img6}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={1156}
          src={img7}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={1156}
          src={img8}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={1156}
          src={img9}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={1156}
          src={img10}
          alt='Icon-BatonTeamManagement'
        />
        <Image
          className='w-full'
          height={1156}
          src={img11}
          alt='Icon-BatonTeamManagement'
        />
      </div>
    </div>
  )
}
