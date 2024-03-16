import { CodeBlock } from '@/Components/CodeBlock'
import { TechCard } from '@/Components/TechCard'
import Image from 'next/image'
import star from '@/assets/star-image.svg'
import { cn } from '@/Util'

export const Code = (props: { className?: string }) => {
  return (
    <div
      className={cn(
        'flex w-full max-w-full flex-col items-center justify-start',
        props.className
      )}
    >
      <div className=' mb-40 flex w-full min-w-full flex-col gap-2 text-8xl leading-[1.05] sm:mb-12 sm:text-2xl'>
        <h2 className='relative mr-[10vw] flex self-center'>
          Providing the digital{' '}
          <Image
            className='absolute -right-44 sm:right-0 sm:w-20'
            width={208}
            src={star}
            alt='star image'
          />
        </h2>
        <h2 className='self-start'>toolkit for your ideas to</h2>
        <h2 className='self-end'>sprint towards success</h2>
      </div>
      <span className='mb-8 text-3xl sm:text-xl'>Technologies we use</span>
      <div className='mb-12 flex items-start justify-center gap-6 sm:flex-wrap sm:gap-10'>
        <TechCard techKey='python' />
        <TechCard techKey='aws' />
        <TechCard techKey='react' />
        <TechCard techKey='flutter' />
        <TechCard techKey='graphql' />
        <TechCard techKey='javascript' />
        <TechCard techKey='typescript' />
        <TechCard techKey='nodejs' />
        <TechCard techKey='rest' />
      </div>
      <CodeBlock />
    </div>
  )
}
