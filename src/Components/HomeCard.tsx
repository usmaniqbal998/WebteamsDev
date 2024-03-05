type HomeCardProps = {
  children: string
  title: string
}

export function HomeCard(props: HomeCardProps) {
  return (
    <div className='flex w-[520px] flex-col items-center justify-center gap-5 rounded-[24px] border-2 px-10 py-8'>
      <span className='text-2xl text-white'>{props.title}</span>
      <span className='text-center text-sm leading-7 text-neutral-400'>
        {props.children}
      </span>
    </div>
  )
}
