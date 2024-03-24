type OurDesignCardProps = {
  title: string
  steps: {
    subtitle: string
    text: string
  }[]
}

export function OurDesignCard(props: OurDesignCardProps) {
  return (
    <div className='flex w-screen flex-col gap-10 bg-zinc-900 px-72 '>
      <h2 className='text-8xl '>
        Our design <br /> process
      </h2>
      <div className=' flex w-full flex-row items-start justify-center gap-10'>
        {props.steps.map((step, index) => (
          <>
            <div className='flex w-32 flex-col gap-2'>
              <span className='flex size-11 items-center justify-center rounded-full bg-green-300 text-xl text-black'>
                {index + 1}
              </span>
              <span className='text-xl'>{step.subtitle} </span>
              <p className=' text-stone-400'>{step.text}</p>
            </div>
            <div className='h-full w-[1px] bg-white last-of-type:hidden'></div>
          </>
        ))}
      </div>
      <div className=''></div>
    </div>
  )
}
