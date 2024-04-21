'use client'

import { CaseLoader } from '../../../Components/CaseLoader'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const BatonDesktop = dynamic(
  () =>
    import('@/app/cases/baton/BatonDesktop').then(
      module => module.BatonDesktop
    ),
  { ssr: false, loading: () => <CaseLoader /> }
)
const BatonMobile = dynamic(
  () =>
    import('@/app/cases/baton/BatonMobile').then(module => module.BatonMobile),
  { ssr: false, loading: () => <CaseLoader /> }
)

export default function Baton() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return isMobile ? <BatonMobile /> : <BatonDesktop />
}
