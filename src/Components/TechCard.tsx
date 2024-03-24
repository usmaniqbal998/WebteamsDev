'use client'

import Image from 'next/image'
import { TechLabel } from '@/Util/TechLabel'
import { HTMLAttributes } from 'react'
import { cn } from '@/Util'
import awsIcon from '@/assets/tech/aws-icon.svg'
import flutterIcon from '@/assets/tech/flutter-icon.svg'
import graphqlIcon from '@/assets/tech/graphql-icon.svg'
import javascriptIcon from '@/assets/tech/javascript-icon.svg'
import nodejsIcon from '@/assets/tech/nodejs-icon.svg'
import pythonIcon from '@/assets/tech/python-icon.svg'
import reactIcon from '@/assets/tech/react-icon.svg'
import restIcon from '@/assets/tech/rest-icon.svg'
import typescriptIcon from '@/assets/tech/typescript-icon.svg'
import {
  StaticImageData,
  StaticImport
} from 'next/dist/shared/lib/get-img-props'

import SVG from 'react-inlinesvg'

type Tech = {
  key: TechLabel
  label: string
  iconFile: StaticImageData
}

const techs: Tech[] = [
  {
    key: 'aws',
    label: 'AWS',
    iconFile: awsIcon
  },
  {
    key: 'flutter',
    label: 'Flutter',
    iconFile: flutterIcon
  },
  {
    key: 'graphql',
    label: 'GraphQL',
    iconFile: graphqlIcon
  },
  {
    key: 'javascript',
    label: 'Javascript',
    iconFile: javascriptIcon
  },
  {
    key: 'nodejs',
    label: 'Node.js',
    iconFile: nodejsIcon
  },
  {
    key: 'python',
    label: 'Python',
    iconFile: pythonIcon
  },
  {
    key: 'reactNative',
    label: 'React',
    iconFile: reactIcon
  },
  {
    key: 'rest',
    label: 'REST',
    iconFile: restIcon
  },
  {
    key: 'typescript',
    label: 'Typescript',
    iconFile: typescriptIcon
  }
] as const

const techDic = techs.reduce(
  (dic, tech) => {
    dic[tech.key] = tech
    return dic
  },
  {} as Record<TechLabel, Tech>
)

type TechCardProps = {
  techKey: TechLabel
  isSelected?: boolean
} & HTMLAttributes<HTMLDivElement>

export const TechCard = ({
  techKey,
  isSelected = false,
  className,
  ...props
}: TechCardProps) => {
  const tech = techDic[techKey]

  return (
    <div
      data-selected={isSelected}
      className={cn(
        'flex flex-col items-center justify-center gap-6 cursor-pointer group',
        className
      )}
      {...props}
    >
      <div className='flex h-[88px] w-28 items-center justify-center rounded-3xl p-4 ring-2 ring-white group-hover:ring-[#C9E6BB] group-data-[selected=true]:bg-[#CEDCF6]'>
        <SVG
          className='group-hover:stroke-[#C9E6BB] group-data-[selected=true]:invert'
          src={tech.iconFile.src}
        ></SVG>
      </div>
      <span className='text-neutral-400 group-hover:text-[#C9E6BB] group-data-[selected=true]:text-[#CEDCF6]'>
        {tech.label}
      </span>
    </div>
  )
}
