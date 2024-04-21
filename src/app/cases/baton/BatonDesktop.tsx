'use client'

import Image from 'next/image'
import img1 from '@/assets/baton/desktop/img1-baton.png'
import img2 from '@/assets/baton/desktop/img2-baton.png'
import img3 from '@/assets/baton/desktop/img3-batonn.png'
import img4 from '@/assets/baton/desktop/img4-baton.png'
import img5 from '@/assets/baton/desktop/img5-baton.png'
import img6 from '@/assets/baton/desktop/img6-baton.png'
import img7 from '@/assets/baton/desktop/img7-baton.png'
import img8 from '@/assets/baton/desktop/img8-baton.png'
import img9 from '@/assets/baton/desktop/img9-baton.png'
import img10 from '@/assets/baton/desktop/img10-baton.png'

export function BatonDesktop() {
  return (
    <div className='flex max-w-full flex-col items-center justify-center gap-14'>
      <h1 className='text-center text-8xl'>Baton Team Management</h1>
      <Image src={img1} alt='Icon-BatonTeamManagement' />
      <Image src={img2} alt='Icon-BatonTeamManagement' />
      <Image src={img3} alt='Icon-BatonTeamManagement' />
      <Image src={img4} alt='Icon-BatonTeamManagement' />
      <Image src={img5} alt='Icon-BatonTeamManagement' />
      <Image src={img6} alt='Icon-BatonTeamManagement' />
      <Image src={img7} alt='Icon-BatonTeamManagement' />
      <Image src={img8} alt='Icon-BatonTeamManagement' />
      <Image src={img9} alt='Icon-BatonTeamManagement' />
      <Image src={img10} alt='Icon-BatonTeamManagement' />
    </div>
  )
}
