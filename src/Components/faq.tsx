'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger
} from '@/Components/ui/accordion'
import { cn } from '@/Util'
import { AccordionContent } from '@radix-ui/react-accordion'

export type FaqItem = {
  question: string
  answer: string
}

type FaqProps = {
  faqItems: FaqItem[]
  className?: string
}

export const Faq = ({ className, faqItems }: FaqProps) => {
  return (
    <Accordion
      type='single'
      collapsible
      className={cn(
        'w-11/12 sm:w-11/12 duration-700 sm:text-xs text-left',
        className
      )}
    >
      {faqItems.map(({ answer, question }) => (
        <AccordionItem value={question} key={question} className='min-w-full'>
          <AccordionTrigger className='w-full py-8 text-3xl sm:py-4 sm:text-sm'>
            {question}
          </AccordionTrigger>
          <AccordionContent className='mb-8'>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
