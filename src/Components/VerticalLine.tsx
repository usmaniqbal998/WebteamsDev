import { cn } from '@/Util'

export const VerticalLine = (props: { className?: string }) => (
  <div
    className={cn('min-h-full flex flex-col items-center ', props.className)}
  >
    <div className='w-[1px] flex-[5] translate-y-[5px] bg-white'></div>
    <div className='w-[1px] flex-[1] translate-x-[calc(500%)] -rotate-45 bg-white'></div>
    <div className='w-[1px] flex-[1] translate-x-full rotate-45 bg-white'></div>
    <div className='w-[1px] flex-[1] bg-white'></div>
    <div className='w-[1px] flex-[5] bg-white'></div>
  </div>
)
