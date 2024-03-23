'use server'

import { CodeBlockLanguage } from '@/Util/CodeBlockLanguage'
import { TechLabel } from '@/Util/TechLabel'
import fs from 'fs/promises'
import { resolve } from 'path'

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

export const getCodeSamples = async (label: TechLabel) => {
  const codeLoaders = codeSamples.map(async sample => {
    const code = await fs.readFile(
      resolve('src', 'assets', 'code', sample.file)
    )
    return { label: sample.label, language: sample.language, code }
  })

  const codes = await Promise.all(codeLoaders)

  const codeDic = codes.reduce(
    (codeDic, code) => {
      codeDic[code.label] = {
        code: code.code.toString('utf-8'),
        language: code.language
      }
      return codeDic
    },
    {} as Record<TechLabel, { code: string; language: CodeBlockLanguage }>
  )

  return codeDic[label]
}
