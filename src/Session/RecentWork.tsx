import { RecentWorkGallery } from '@/Components/RecentWorkGallery'

export const RecentWork = () => (
  <div className='flex flex-col items-center justify-start gap-10 text-center'>
    <h2 className='text-5xl leading-snug'>
      Discover your tribe,
      <br />
      who benefits from our support?
    </h2>
    <p className='text-neutral-400'>
      Companies that rely on technology for business growth. Our clients see us
      as a long-term strategic <br /> partner and trusted adviser for product
      design, development, DevOps, and cloud computing work.
    </p>
    <RecentWorkGallery />
  </div>
)
