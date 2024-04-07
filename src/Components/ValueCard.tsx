import Image from 'next/image'

type ValueCardProps = {
  image: string
  title: string
  text: string
}
export function ValueCard(props: ValueCardProps) {
  return (
    <div className='flex h-[23vh] w-full gap-10 rounded-none bg-neutral-800 p-16 leading-loose sm:h-auto sm:flex-col sm:gap-4 sm:rounded-md sm:p-2 sm:py-14'>
      <Image src={props.image} alt='img' className='w-auto self-start sm:h-8' />
      <div className='flex flex-col justify-center gap-4 sm:gap-2'>
        <span className='text-xl font-medium sm:text-lg'>{props.title}</span>
        <p className='text-xl leading-8 sm:text-sm sm:leading-loose'>
          {props.text}
        </p>
      </div>
    </div>
  )
}
