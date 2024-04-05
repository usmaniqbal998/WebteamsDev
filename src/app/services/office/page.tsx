'use client'

import { CaseLoader } from '@/Components/CaseLoader'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const OfficeDesktop = dynamic(
  () =>
    import('@/app/services/office/OfficeDesktop').then(
      module => module.OfficeDesktop
    ),
  { ssr: false, loading: () => <CaseLoader /> }
)
const OfficeMobile = dynamic(
  () =>
    import('@/app/services/office/OfficeMobile').then(
      module => module.OfficeMobile
    ),
  { ssr: false, loading: () => <CaseLoader /> }
)

export default function Office() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return isMobile ? <OfficeMobile /> : <OfficeDesktop />
}
