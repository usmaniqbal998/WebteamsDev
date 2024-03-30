'use client'

import { cn } from '@/Util'
import { useSticky } from '@/hook/useSticky'
import Link from 'next/link'
import { HTMLAttributes, useEffect, useState } from 'react'

type Tag = {
  display: string
  id: string
}

type HeroSideBarProps = {
  tags: Tag[]
  className?: string
} & HTMLAttributes<HTMLDivElement>

export function HeroSideBar({ className, tags, ...rest }: HeroSideBarProps) {
  const [highlightId, setHighlightId] = useState<string>(tags[0].id)

  const id = 'hero-sidebar'
  useSticky(id)

  useEffect(() => {
    const sectionPositionDic = tags.reduce(
      (dic, tag) => {
        const section = document.getElementById(tag.id)
        if (!section) return dic
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY
        dic[tag.id] = sectionPosition
        return dic
      },
      {} as Record<string, number>
    )

    const handleScroll = () => {
      const bottomScrollY = window.scrollY + window.innerHeight

      const tagsOnViewport = tags
        .map(tag => ({
          ...tag,
          sectionPosition: sectionPositionDic[tag.id],
          isOnViewport: bottomScrollY >= sectionPositionDic[tag.id] + 150
        }))
        .filter(tag => tag.isOnViewport)
        .sort((a, b) => b.sectionPosition - a.sectionPosition)

      const selectedTag = tagsOnViewport.at(0)
      setHighlightId(selectedTag?.id ?? '')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [tags])

  return (
    <div
      id={id}
      className={cn(
        'flex sticky flex-col sm:flex-row gap-20 py-10 text-base',
        className
      )}
      {...rest}
    >
      {tags.map(tag => (
        <Link
          href={`#${tag.id}`}
          key={tag.id}
          className={cn(
            'flex items-center justify-start border-l-2 border-white pl-5',
            'sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-2',
            tag.id === highlightId ? 'text-green-500 border-green-600' : ''
          )}
        >
          {tag.display}
        </Link>
      ))}
    </div>
  )
}
