import { cn } from '@/Util'

type HeroSideBarProps = {
  tags: string[]
  className?: string
  highlight?: string
}

export function HeroSideBar(props: HeroSideBarProps) {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-20', props.className)}>
      {props.tags.map(tag => (
        <span
          key={tag}
          className={cn(
            'flex items-center justify-start border-l-2 border-white pl-5',
            'sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-2',
            tag === props.highlight ? 'text-green-500 border-green-600' : ''
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
