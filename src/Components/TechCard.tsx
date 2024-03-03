import Image from 'next/image'
import test from '@/assets/tech/aws-icon.svg'

const techs = (
  [
    {
      key: 'aws',
      label: 'AWS',
      iconFile: 'aws-icon.svg'
    },
    {
      key: 'flutter',
      label: 'Flutter',
      iconFile: 'flutter-icon.svg'
    },
    {
      key: 'graphql',
      label: 'GraphQL',
      iconFile: 'graphql-icon.svg'
    },
    {
      key: 'javascript',
      label: 'Javascript',
      iconFile: 'javascript-icon.svg'
    },
    {
      key: 'nodejs',
      label: 'Node.js',
      iconFile: 'nodejs-icon.svg'
    },
    {
      key: 'python',
      label: 'Python',
      iconFile: 'python-icon.svg'
    },
    {
      key: 'react',
      label: 'React',
      iconFile: 'react-icon.svg'
    },
    {
      key: 'rest',
      label: 'REST',
      iconFile: 'rest-icon.svg'
    },
    {
      key: 'typescript',
      label: 'Typescript',
      iconFile: 'typescript-icon.svg'
    }
  ] as const
).map(tech => ({
  ...tech,
  icon: () => import(`@/assets/tech/${tech.iconFile}`).then(mod => mod.default)
}))

type TechKey = (typeof techs)[number]['key']
type Tech = (typeof techs)[number]

const techDic = techs.reduce(
  (dic, tech) => {
    dic[tech.key] = tech
    return dic
  },
  {} as Record<TechKey, Tech>
)

type TechCardProps = {
  techKey: TechKey
}

export const TechCard = async ({ techKey }: TechCardProps) => {
  const tech = techDic[techKey]

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <div className='flex h-20 w-24 items-center justify-center rounded-3xl p-4 ring-2 ring-white'>
        <Image
          src={await tech.icon()}
          width={64}
          alt={tech.label}
          className='h-full'
        />
      </div>
      <span className='text-neutral-400'>{tech.label}</span>
    </div>
  )
}
