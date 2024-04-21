'use client'

import { CaseLoader } from '../../../Components/CaseLoader'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const RiskDesktop = dynamic(
  () =>
    import('@/app/cases/risk/RiskDesktop').then(module => module.RiskDesktop),
  { ssr: false, loading: () => <CaseLoader /> }
)
const RiskMobile = dynamic(
  () => import('@/app/cases/risk/RiskMobile').then(module => module.RiskMobile),
  { ssr: false, loading: () => <CaseLoader /> }
)

export default function Risk() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return isMobile ? <RiskMobile /> : <RiskDesktop />
}
