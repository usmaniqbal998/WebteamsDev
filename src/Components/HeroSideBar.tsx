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
            'flex gap-4 items-center justify-start border-white min-h-full bg-transparent sm:flex-col sm:gap-2',
            tag.id === highlightId ? 'text-green-500 border-green-600' : ''
          )}
        >
          <div
            className={cn(
              'z-50 h-8 w-[2px] bg-white sm:w-10 sm:h-[2px]',
              tag.id === highlightId ? 'bg-green-500' : ''
            )}
          ></div>
          {tag.display}
        </Link>
      ))}
    </div>
  )
}
