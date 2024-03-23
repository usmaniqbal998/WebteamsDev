export function OurDesignCard() {
  return (
    <div className='w-full'>
      <h2 className='text-8xl '>
        Our design <br /> process
      </h2>
      <div className='flex w-full flex-row items-center justify-center gap-10'>
        {Array.from({ length: 5 }).map(() => (
          <>
            <div className='flex w-32 flex-col'>
              <span className='flex size-11 items-center justify-center rounded-full bg-green-300 text-xl text-black'>
                1
              </span>
              <span className='text-xl'>Empathize </span>
              <p className=' text-stone-400'>
                Move around the problem what the user says, thinks, and feels.
                Create persona of the user.
              </p>
            </div>
            <div className=''></div>
          </>
        ))}
      </div>
      <div className=''></div>
    </div>
  )
}
