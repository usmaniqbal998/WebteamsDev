'use client'

import { CodeBlock } from '@/components/CodeBlock'
import { TechCard } from '@/components/TechCard'
import Image from 'next/image'
import star from '@/assets/star-image.svg'
import { cn } from '@/Util'
import { TechLabel, techLabels } from '@/Util/TechLabel'
import { useEffect, useState } from 'react'
import { CodeBlockLanguage } from '@/Util/CodeBlockLanguage'

type CodeSample = {
  file: string
  language: CodeBlockLanguage
  label: TechLabel
}

const codeSamples: CodeSample[] = [
  {
    language: 'yaml',
    label: 'aws',
    file: 'aws.yaml'
  },
  {
    language: 'dart',
    label: 'flutter',
    file: 'flutter.dart'
  },
  {
    language: 'graphql',
    label: 'graphql',
    file: 'graphql.gql'
  },
  {
    language: 'javascript',
    label: 'javascript',
    file: 'javascript.js'
  },
  {
    language: 'typescript',
    label: 'nodejs',
    file: 'nodejs.ts'
  },
  {
    language: 'python',
    label: 'python',
    file: 'python.py'
  },
  {
    language: 'tsx',
    label: 'reactNative',
    file: 'reactNative.tsx'
  },
  {
    language: 'rest',
    label: 'rest',
    file: 'rest.rest'
  },
  {
    language: 'typescript',
    label: 'typescript',
    file: 'typescript.ts'
  }
]

const codeDic = codeSamples.reduce(
  (dic, sample) => {
    dic[sample.label] = sample
    return dic
  },
  {} as Record<TechLabel, CodeSample>
)

type CodeProps = {
  className?: string
}

export const Code = (props: CodeProps) => {
  const [selectedTechLabel, setSelectedTechLabel] =
    useState<TechLabel>('typescript')

  const [codeSample, setCodeSample] = useState<null | {
    code: string
    language: CodeBlockLanguage
  }>(null)

  useEffect(() => {
    const codeInfo = codeDic[selectedTechLabel]
    fetch(`/code/${codeInfo.file}`)
      .then(response => response.text())
      .then(code => ({
        code,
        language: codeInfo.language
      }))
      .then(sample => setCodeSample(sample))
  }, [selectedTechLabel])

  return (
    <div
      className={cn(
        'flex w-full max-w-full flex-col items-center justify-start',
        props.className
      )}
    >
      <div className=' mb-40 flex w-full min-w-full flex-col gap-2 text-8xl leading-[1.05] 2xl:text-7xl xl:text-6xl sm:mb-12 sm:text-2xl'>
        <h2 className='relative mr-[10vw] flex self-center'>
          Providing the digital
          <Image
            className='absolute -right-44 h-auto w-[208px] 2xl:w-40 xl:w-36 sm:right-[-50px] sm:w-20'
            width={100}
            src={star}
            alt='star image'
          />
        </h2>
        <h2 className='self-start'>toolkit for your ideas to</h2>
        <h2 className='self-end'>sprint towoards success</h2>
      </div>
      <span className='mb-8 text-3xl sm:text-xl'>Technologies we use</span>
      <div className='mb-12 flex items-start justify-center gap-6 sm:flex-wrap sm:gap-4'>
        {techLabels.map(techLabel => (
          <TechCard
            techKey={techLabel}
            key={techLabel}
            onClick={() => setSelectedTechLabel(techLabel)}
            isSelected={selectedTechLabel === techLabel}
          />
        ))}
      </div>
      <CodeBlock
        code={codeSample?.code ?? 'loading'}
        language={codeSample?.language ?? 'typescript'}
      />
    </div>
  )
}
