import { BatonDesktop } from '@/app/services/baton/BatonDesktop'
import { useMediaQuery } from 'react-responsive'

export default function Baton() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return isMobile ? <div>mobile</div> : <BatonDesktop />
}
