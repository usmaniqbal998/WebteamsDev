import { CommentCard } from '@/Components/CommentCard'
import { RecentWorkGallery } from '@/Components/RecentWorkGallery'
import { Faq, FaqItem } from '@/Components/faq'
import { RecentWork } from '@/Session/RecentWork'

const faqItems: FaqItem[] = [
  {
    question: 'How can I get started with my project?',
    answer: `Simply reach out to us through our contact page, share your project details, and we'll guide you through the seamless process of initiating your web/app development and UX/UI project.`
  },
  {
    question: `What industries do you cater to?`,
    answer: `We take pride in our versatility. Our expertise extends across various industries, including but not limited to technology, healthcare, finance, e-commerce, and education. Feel free to inquire about your specific industry, and we'll be happy to discuss how we can tailor our services to meet your unique needs.`
  }
]

export default function test() {
  return <RecentWork />
}
