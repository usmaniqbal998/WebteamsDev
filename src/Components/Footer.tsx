import Image from 'next/image'
import webteamsLogo from '@/assets/webteams-logo.svg'
import { MenuButton } from '@/Components/MenuButton'
import { ImageCircle } from '@/Util/ImageCirclu'
import linkedinIcon from '@/assets/linkedin-icon.svg'
import facebookIcon from '@/assets/facebook-icon.svg'
import emailIcon from '@/assets/email-icon.svg'

export const Footer = () => {
  return (
    <footer className='flex h-32 w-screen items-start justify-between bg-neutral-950 px-28 pt-8'>
      <div className='flex items-center justify-center gap-2'>
        <Image src={webteamsLogo} alt='webteams logo' />
        <span className='text-xl font-semibold'>webteams</span>
      </div>
      <div className='flex items-center gap-28'>
        <MenuButton href='/about' regex='^\/about$'>
          about us
        </MenuButton>
        <MenuButton href='/services' regex='^\/services'>
          services
        </MenuButton>
        <div className='flex gap-6'>
          <ImageCircle
            src={linkedinIcon}
            circleSize={35}
            imageHeight={12}
            alt='linkedin Icon'
          />
          <ImageCircle
            src={facebookIcon}
            circleSize={35}
            imageHeight={12}
            alt='facebook Icon'
          />
          <ImageCircle
            src={emailIcon}
            imageHeight={12}
            circleSize={35}
            alt='email Icon'
          />
        </div>
      </div>
    </footer>
  )
}
