'use client'

import { CaseLoader } from '../../../components/CaseLoader'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const OfficeDesktop = dynamic(
  () =>
    import('@/app/cases/office/OfficeDesktop').then(
      module => module.OfficeDesktop
    ),
  { ssr: false, loading: () => <CaseLoader /> }
)
const OfficeMobile = dynamic(
  () =>
    import('@/app/cases/office/OfficeMobile').then(
      module => module.OfficeMobile
    ),
  { ssr: false, loading: () => <CaseLoader /> }
)

export default function Office() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return isMobile ? <OfficeMobile /> : <OfficeDesktop />
}
