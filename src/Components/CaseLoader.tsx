import { Skeleton } from '@/Components/ui/skeleton'

export const CaseLoader = () => {
  return (
    <div className='flex flex-col items-center justify-start gap-14 sm:gap-4'>
      <Skeleton className='h-20 w-[50vw]' />
      <Skeleton className='h-[70vh] w-[70vw] sm:h-[60vw] sm:w-[90vw]' />
      <Skeleton className='h-[70vh] w-[70vw] sm:h-[60vw] sm:w-[90vw]' />
      <Skeleton className='h-[70vh] w-[70vw] sm:h-[60vw] sm:w-[90vw]' />
      <Skeleton className='h-[70vh] w-[70vw] sm:h-[60vw] sm:w-[90vw]' />
    </div>
  )
}
