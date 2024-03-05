import { CodeBlock } from '@/Components/CodeBlock'
import { TechCard } from '@/Components/TechCard'
import Image from 'next/image'
import star from '@/assets/star-image.svg'

export const Code = () => {
  return (
    <div className='flex max-w-full flex-col items-center justify-center'>
      <div className='relative mb-20 flex min-w-full flex-col gap-2 text-8xl'>
        <h2 className='self-center'>Providing the digital</h2>
        <h2 className='self-start'>toolkit for your ideas to</h2>
        <h2 className='self-end'>sprint towards success</h2>
        <Image
          className='absolute right-10'
          width={208}
          src={star}
          alt='star image'
        />
      </div>
      <span className='mb-8 text-3xl'>Technologies we use</span>
      <div className='mb-12 flex gap-4 '>
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
