import { CaseLoader } from '@/Components/CaseLoader'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const RiskDesktop = dynamic(
  () =>
    import('@/app/services/risk/RiskDesktop').then(
      module => module.RiskDesktop
    ),
  { ssr: false, loading: () => <CaseLoader /> }
)
const RiskMobile = dynamic(
  () =>
    import('@/app/services/risk/RiskMobile').then(module => module.RiskMobile),
  { ssr: false, loading: () => <CaseLoader /> }
)

export default function Risk() {
  const isMobile = useMediaQuery({ minWidth: 767 })

  return isMobile ? <RiskMobile /> : <RiskDesktop />
}
