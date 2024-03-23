'use client'

import { CodeBlock as _CodeBlock, irBlack } from 'react-code-blocks'

import copyIcon from '@/assets/copy-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import typescriptIcon from '@/assets/tech/typescript-icon.svg'
import Image from 'next/image'
import { useRef } from 'react'
import { cn } from '@/Util'
import { CodeBlockLanguage } from '@/Util/CodeBlockLanguage'

type CodeBlockProps = {
  code: string
  language: CodeBlockLanguage
}

export const CodeBlock = (props: CodeBlockProps) => {
  const CodeBlockRef = useRef(null)
  return (
    <div className='flex w-[70vw] flex-col items-center justify-center divide-y-[1px] rounded-3xl border-2 sm:w-full '>
      <div className='flex h-20 w-full items-center justify-between p-6 sm:px-4'>
        <div className='flex items-center justify-center gap-2 rounded-xl p-2 ring-1 ring-white'>
          <Image
            src={typescriptIcon}
            alt='Typescript icon'
            height={24}
            className='size-6 sm:size-4'
          ></Image>
          <div className='text-xs'>Typescript</div>
        </div>
        <div className='font-mono'>
          <Image
            src={copyIcon}
            height={35}
            alt='copy icon'
            className='rounded ring-1 ring-white'
          />
        </div>
      </div>
      <div
        className={cn(
          'h-[600px] sm:h-[450px] w-full max-w-full [&_span]:z-10 [&_span]:max-h-full sm:text-sm',
          '[&_span]:scrollbar-thin [&_span]:scrollbar-track-neutral-600 [&_span]:scrollbar-thumb-neutral-900 overflow-x-hidden'
        )}
      >
        <_CodeBlock
          text={props.code}
          language={props.language}
          theme={irBlack}
          ref={CodeBlockRef}
          wrapLongLines={false}
        />
      </div>
      <div className='flex w-full items-center gap-4 px-8 py-6'>
        <Image
          src={githubIcon}
          height={20}
          alt='github icon'
          className='sm:size-4'
        />
        <span className='cursor-pointer  text-neutral-200 underline transition-all hover:text-neutral-300'>
          View our team member GitHub
        </span>
      </div>
    </div>
  )
}
