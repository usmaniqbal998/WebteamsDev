type HomeCardProps = {
  children: string
  title: string
}

export function HomeCard(props: HomeCardProps) {
  return (
    <div className='flex w-[630px] flex-col items-center justify-center gap-5 rounded-lg border-2 p-10'>
      <span className='text-3xl text-white'>{props.title}</span>
      <span className='text-center text-base leading-7 text-neutral-400'>
        {props.children}
      </span>
    </div>
  )
}
