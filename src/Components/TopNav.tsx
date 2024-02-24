import webteamsLogo from '@/assets/webteams-logo.svg'
import Image from 'next/image'

export const TopNav = () => {
  return (
    <div>
      <Image src={webteamsLogo} alt='webteams logo' />
    </div>
  )
}
