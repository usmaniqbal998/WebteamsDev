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
      className={cn('w-[800px] duration-700', className)}
    >
      {faqItems.map(({ answer, question }) => (
        <AccordionItem value={question} key={question}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent className='mb-8'>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
