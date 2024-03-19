export const techLabels = [
  'graphql',
  'javascript',
  'python',
  'rest',
  'typescript',
  'aws',
  'flutter',
  'nodejs',
  'reactNative'
] as const

export type TechLabel = (typeof techLabels)[number]
