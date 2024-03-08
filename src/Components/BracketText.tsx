type BracketTextProps = {
  className?: string
}

export function BracketText(props: BracketTextProps) {
  return (
    <div className={`flex w-[500px] text-white sm:w-full ${props.className}`}>
      <span className='text-6xl font-thin text-white'>&#123;</span>
      <span className='max-h-[6rem] overflow-hidden pt-0 text-lg text-white sm:text-base'>
        Embark on your product journey with our elite and precise agile Squad.
      </span>
      <span className='text-6xl font-thin text-white'>&#125;</span>
    </div>
  )
}
