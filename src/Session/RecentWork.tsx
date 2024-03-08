import { RecentWorkGallery } from '@/Components/RecentWorkGallery'

export const RecentWork = () => (
  <div className='flex max-w-full flex-col items-center justify-start gap-10 text-center'>
    <h2 className='text-5xl leading-snug sm:text-left sm:text-4xl'>
      Discover your tribe,
      <br className='sm:invisible' />
      who benefits from our support?
    </h2>
    <p className='text-wrap leading-relaxed text-neutral-400 sm:text-left sm:text-sm sm:leading-7 '>
      Companies that rely on technology for business growth. Our clients see us
      as a long-term strategic <br className='sm:invisible' /> partner and
      trusted adviser for product design, development, DevOps, and cloud
      computing work.
    </p>
    <RecentWorkGallery />
  </div>
)
