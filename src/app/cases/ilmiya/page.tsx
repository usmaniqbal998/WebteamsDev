'use client'

import { CaseLoader } from '../../../Components/CaseLoader'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const IlmyaDesktop = dynamic(
  () =>
    import('@/app/cases/ilmiya/IlmyaDesktop').then(
      module => module.IlmyaDesktop
    ),
  { ssr: false, loading: () => <CaseLoader /> }
)
const IlmyaMobile = dynamic(
  () =>
    import('@/app/cases/ilmiya/IlmyaMobile').then(module => module.IlmyaMobile),
  { ssr: false, loading: () => <CaseLoader /> }
)

export default function Ilmya() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return isMobile ? <IlmyaMobile /> : <IlmyaDesktop />
}
