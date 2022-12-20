import React from 'react'
import AccordionUI from './organisms/AccordionUI'
import Section from './organisms/Section'
import Typography from './atoms/Text'
const data = [
  {
    id: 1,
    question: 'What design software you use? ',
    answer: 'The React Framework for Production',
  },
  {
    id: 2,
    question: '1st design time period? ',
    answer:
      'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
  },
  {
    id: 3,
    question: 'Your provide services related to developing ',
    answer:
      ' a visual object or experience consciously created through an expression of skill or imagination.',
  },
  {
    id: 4,
    question: 'What if i do not like your design? ',
    answer:
      ' a visual object or experience consciously created through an expression of skill or imagination.',
  },
]

const FAQ = () => {
  const [Index, setIndex] = React.useState(false)
  return (
    <Section>
      <Typography variant="h3">FAQ</Typography>
      <div className="mt-5 md:mt-10">
        {data.map((data) => {
          return (
            <AccordionUI
              title={data.question}
              key={data.id}
              Id={data.id}
              children={data.answer}
              Index={Index}
              setIndex={setIndex}
            ></AccordionUI>
          )
        })}
      </div>
    </Section>
  )
}

export default FAQ
