import React from 'react'
import AccordionUI from './organisms/AccordionUI'
import Section from './organisms/Section'
import Typography from './atoms/Text'
const data = [
  {
    id: 3,
    question: 'Why should i hire your team ?',
    answer:
      'hiring our team would be best decision for your business. In a flat monthly ammount you can get a whole team of engineers(backend, frontend) and a product manager that had already experiance working in your domain and know his engineers and would deliver best out of them. you will not have to worry about building a whole team from scratch. You can work only on business while we offload all the engineering and team building burden from your shoulders',
  },
  {
    id: 1,
    question: 'What is vetting process',
    answer:
      'We have engineers from diverse background and have years of experiance with different technologies. We access all engineers very critically based on cultural fit, Technology experiance , coding assesments and finally onboard them',
  },
  {
    id: 2,
    question:
      'What happens if i am not satisfied with your deliveries of agile teams',
    answer:
      'Although this has never happened. But in case this happens You can end the contract anytime with one month notice and we will close all pending tasks and handover you everything regarding your project',
  },
  {
    id: 3,
    question: 'Is their a trial for your agile teams?',
    answer:
      'Yes we offer a minimum 3 month paid trial for our agile teams where our team can work on any of the app module and you can access our deliveries and quality of work',
  },
]

const FAQ = () => {
  const [Index, setIndex] = React.useState(0)
  return (
    <Section>
      <Typography variant="h3">FAQ</Typography>
      <div className="mt-5 md:mt-10">
        {data.map((data) => (
          <AccordionUI
            title={data.question}
            key={data.id}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          />
        ))}
      </div>
    </Section>
  )
}

export default FAQ
