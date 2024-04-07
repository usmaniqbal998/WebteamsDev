import starIcon from '@/assets/star-icon.svg'
import Image from 'next/image'

import person1 from '@/assets/person/Web teams/person1.png'
import person2 from '@/assets/person/Web teams/person2.png'
import person3 from '@/assets/person/Web teams/person3.png'
import person4 from '@/assets/person/Web teams/person4.png'
import person5 from '@/assets/person/Web teams/person5.png'
import person6 from '@/assets/person/Web teams/person6.png'
import person7 from '@/assets/person/Web teams/person7.png'
import person8 from '@/assets/person/Web teams/person8.png'
import person9 from '@/assets/person/Web teams/person9.png'
import person10 from '@/assets/person/Web teams/person10.png'
import person11 from '@/assets/person/Web teams/person11.png'
import { CommentCard } from '@/Components/CommentCard'
import { cn } from '@/Util'

const comments1 = [
  {
    name: 'Sarah Thompson',
    text: 'Good communication skills and quality work!',
    photo: person1
  },
  {
    name: 'Olivia Turner',
    text: "The app's functionality is spot on, and the attention to detail is impressive. They've earned my trust and recommendation!",
    photo: person2
  },
  {
    name: 'Mital',
    text: 'I like their work and they are very professional about their work.',
    photo: person3
  }
]

const comments2 = [
  {
    name: 'Joe Contonie',
    text: 'Webteams is a great communicator and highly proactive. They are reliable, creative, and was genuinely interested in the project. They did their own research on the topic to better understand how potential users might use the design, and came back with great ideas that  was able to quickly design.',
    photo: person4
  },
  {
    name: 'Lisa Chen',
    text: 'The user experience is seamless, making navigation a breeze.',
    photo: person5
  }
]

const comments3 = [
  {
    name: 'Kasia Lecka',
    text: 'Very happy to work with this webteams. Attention to details.',
    photo: person6
  },
  {
    name: 'Hiring Express',
    text: 'It was great to work with webteams  and I we recommend him for anyone looking for a versatile and accommodating designers. It was a pleasure to work with them on two projects.',
    photo: person7
  },
  {
    name: 'Emily Brown',
    text: 'Working with Webteams was a game-changer for our website redesign. The UX is beyond impressive, and the sleek design has received numerous compliments.',
    photo: person8
  }
]

const comments4 = [
  {
    name: (
      <>
        Kalaiselvi <br /> Vasudevan
      </>
    ),
    text: 'Webteams always stands on their commitment and deadline. I always wish to work with them in future',
    photo: person9
  },
  {
    name: 'Andrews',
    text: 'Amazing and professional work. He understood everything in detail and complete really fast. Highly recommend. Thanks',
    photo: person10
  },
  {
    name: 'Tadewosbell',
    text: 'Communication was great, fast revisions and delivery. Good design and a good design process that has a lot of opportunity for feedback',
    photo: person11
  }
]

export function Reviews(props: { className?: string }) {
  return (
    <div
      className={cn(
        'mb-4 flex gap-5 leading-relaxed sm:gap-4',
        props.className
      )}
    >
      <div className='flex flex-col gap-5 sm:gap-4'>
        <h2 className='text-[4rem] font-semibold sm:text-4xl'>Reviews</h2>
        {comments1.map(comment => (
          <CommentCard
            comment={comment.text}
            name={comment.name}
            key={comment.name}
            photo={comment.photo}
          />
        ))}
        <Image
          className='mt-6 sm:mt-0 sm:size-24'
          height={152}
          src={starIcon}
          alt='staricon'
        />
      </div>
      <div className='flex flex-col gap-5 sm:hidden sm:gap-4'>
        {comments2.map(comment => (
          <CommentCard
            comment={comment.text}
            photo={comment.photo}
            name={comment.name}
            key={comment.name}
          />
        ))}
      </div>
      <div className='flex flex-col gap-5 self-end sm:hidden'>
        {comments3.map(comment => (
          <CommentCard
            comment={comment.text}
            name={comment.name}
            key={comment.name}
            photo={comment.photo}
          />
        ))}
      </div>
      <div className='mb-8 flex flex-col gap-5 self-end sm:gap-4'>
        {comments4.map(comment => (
          <CommentCard
            comment={comment.text}
            name={comment.name}
            key={comment.name.toString()}
            photo={comment.photo}
          />
        ))}
      </div>
    </div>
  )
}
