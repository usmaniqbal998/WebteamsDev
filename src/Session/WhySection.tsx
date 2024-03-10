import Image from 'next/image'
import group1 from '@/assets/whysection/Group1.svg'
import group2 from '@/assets/whysection/Group2icon.svg'
import group3 from '@/assets/whysection/group3.svg'
import group4 from '@/assets/whysection/Group4.svg'

export function WhySection() {
  return (
    <div className='flex flex-col gap-16'>
      <h2 className='text-8xl w-4/6'>Why you should hire our design team?</h2>
      <div className='grid grid-cols-2 gap-10'>
        <div className='flex flex-col gap-3'>
          <Image src={group1} alt='icongroup1' />
          <span>Brand Oriented Design</span>
          <p className='text-neutral-300'>
            Our designs speak for your brand. We design with a strategic mindset
            and focuses on continually creating, developing, and maintaining
            brand identity across consumer and stakeholder. Every aspect of our
            design depicts your brand.
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <Image src={group2} alt='group2icon' />
          <span>User-Centric Design</span>
          <p className='text-neutral-300'>
            We never leave your users behind. We have an Iterative Design
            Process in which designers focus on the users and their needs in
            each phase of the process. With this approach, your users will have
            more flexibility and options on your platform giving you a
            competitive edge
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <Image src={group3} alt='icon3' />
          <span>Accessibility & Usability </span>
          <p className='text-neutral-300'>
            While designing we continuously ensure that all parts of our designs
            follow accessibility standards and usability processes. We ensure
            that our designs are usable by people with disability.
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <Image src={group4} alt='icon4' />
          <span>Higher Conversion Rate </span>
          <p className='text-neutral-300'>
            Maximise engagement with clear, compelling calls-to-action: Drive
            your conversion rate sky-high.
          </p>
        </div>
      </div>
    </div>
  )
}
