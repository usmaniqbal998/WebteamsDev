import { Faq, FaqItem } from '@/Components/faq'
import { cn } from '@/Util'

export const FaqSession = (props: { className?: string }) => {
  const faqItems: FaqItem[] = [
    {
      question: 'How can I get started with my project?',
      answer: `Simply reach out to us through our contact page, share your project details, and we'll guide you through the seamless process of initiating your web/app development and UX/UI project.`
    },
    {
      question: `What industries do you cater to?`,
      answer: `We take pride in our versatility. Our expertise extends across various industries, including but not limited to technology, healthcare, finance, e-commerce, and education. Feel free to inquire about your specific industry, and we'll be happy to discuss how we can tailor our services to meet your unique needs.`
    },
    {
      question: `What services do you offer?`,
      answer: `We offer comprehensive web and app development services along with UX/UI design expertise. Our services encompass everything from initial consultation and needs assessment to design, development, testing, and ongoing support. Whether you need a new website, a mobile app, or a revamp of your user experience, we've got you covered. Explore our full range of services to find the solutions that best suit your project goals.`
    },
    {
      question: `How does the development process work?`,
      answer: `Our development process involves initial consultation, needs assessment, design, development, testing, and ongoing support. We collaborate closely with you at every stage to ensure your project evolves seamlessly from concept to reality.`
    },
    {
      question: `What is the typical timeline for a project?`,
      answer: `Project timelines vary based on factors like complexity and features. Following our initial consultation and needs assessment, we provide a customized timeline in our project proposal. Rest assured, we prioritize efficiency without compromising quality to deliver your project promptly.`
    },
    {
      question: `Can you handle both small and large-scale projects?`,
      answer: `Absolutely. We're equipped to handle projects of all sizes with the same dedication and expertise, ensuring successful outcomes for both small and large-scale initiatives.`
    }
  ]

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-start',
        props.className
      )}
    >
      <h2 className='mb-8 w-11/12 text-6xl sm:mb-4 sm:text-4xl'>
        Frequently asked questions
      </h2>
      <Faq faqItems={faqItems} />
    </div>
  )
}
