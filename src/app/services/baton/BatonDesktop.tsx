'use client'

import Image from 'next/image'
import img1 from '@/assets/baton/img1-baton.svg'
import img2 from '@/assets/baton/img2-baton.svg'
import img3 from '@/assets/baton/img3-baton.svg'
import img4 from '@/assets/baton/img4-baton.svg'
import img5 from '@/assets/baton/img5-baton.svg'
import img6 from '@/assets/baton/img6-baton.svg'
import img7 from '@/assets/baton/img7-baton.svg'
import img8 from '@/assets/baton/img8-baton.svg'
import img9 from '@/assets/baton/img9-baton.svg'
import img10 from '@/assets/baton/img10-baton.svg'

export function BatonDesktop() {
  return (
    <div className='flex max-w-full flex-col items-center justify-center gap-14'>
      <h1 className='text-center text-8xl'>Baton Team Management</h1>
      <Image
        className='w-auto'
        height={1156}
        src={img1}
        alt='Icon-BatonTeamManagement'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img2}
        alt='Icon-BatonTeamManagement'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img3}
        alt='Icon-BatonTeamManagement'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img4}
        alt='Icon-BatonTeamManagement'
      />
      <Image
        className='w-auto'
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
        className='w-auto'
        height={1156}
        src={img7}
        alt='Icon-BatonTeamManagement'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img8}
        alt='Icon-BatonTeamManagement'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img9}
        alt='Icon-BatonTeamManagement'
      />
      <Image
        className='w-auto'
        height={1156}
        src={img10}
        alt='Icon-BatonTeamManagement'
      />
    </div>
  )
}
