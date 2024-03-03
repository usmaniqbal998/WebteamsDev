import Image from 'next/image'
import Person1 from '@/assets/person/person1.png'

export function CommentCard() {
  return (
    <div className='flex w-72 flex-col gap-5 rounded-xl border border-solid p-8 text-white'>
      <div className='flex items-center justify-start gap-3'>
        <Image className='size-6 rounded-full' src={Person1} alt='person 1' />
        <div>Joe Containe</div>
      </div>
      <span className='text-neutral-400'>
        Webteams is a great communicator and highly proactive. They are
        reliable, creative, and was genuinely interested in the project. They
        did their own research on the topic to better understand how potential
        users might use the design, and came back with great ideas that was able
        to quickly design.
      </span>
    </div>
  )
}
