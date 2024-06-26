import { RecentWorkGallery } from '@/Components/RecentWorkGallery'
import { cn } from '@/Util'

export const RecentWork = (props: { className?: string }) => (
  <div
    className={cn(
      'flex max-w-full flex-col items-center justify-start gap-10 text-center',
      props.className
    )}
  >
    <h2 className='text-[3.5rem] leading-snug sm:text-left sm:text-4xl'>
      Discover your tribe,
      <br className='sm:invisible' />
      who benefits from our support?
    </h2>
    <p className='text-wrap leading-relaxed text-neutral-400 sm:text-left sm:text-sm sm:leading-7 '>
      Companies that rely on technology for business growth. Our clients see us
      as a long-term strategic <br className='sm:hidden' /> partner and trusted
      adviser for product design, development, DevOps, and cloud computing work.
    </p>
    <RecentWorkGallery />
  </div>
)
