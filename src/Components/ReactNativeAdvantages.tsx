export function ReactNativeAdvantages() {
  return (
    <div className='flex w-screen flex-col items-start justify-center gap-8 bg-[#A5D6A7] px-72 py-24 text-black sm:px-8 sm:py-10'>
      <h2 className='text-8xl sm:text-3xl sm:font-semibold'>
        Advantages of <br />
        <mark className='font-semibold text-green-500'>React</mark> Native
      </h2>
      <div className=' grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-5 leading-loose sm:grid-cols-1 sm:grid-rows-none'>
        <div>
          <span className='text-2xl font-semibold sm:text-xl'>
            Cross Platform
          </span>
          <p className='leading-loose sm:text-base'>
            With a single code base you can have both android and ios mobile
            apps this will give you an advantage in cost and project delivery
            would be faster.
          </p>
        </div>
        <div>
          <span className='text-2xl font-semibold sm:text-xl'>MVP</span>
          <p className='leading-loose sm:text-base'>
            It is very common for businesses to create a minimal viable product
            to go to market and test customer responses. React native is the
            best choice for this. you will have a fully functional app ready to
            be launched to market in a few weeks
          </p>
        </div>
        <div>
          <span className='text-2xl font-semibold sm:text-xl'>
            Attractive UI
          </span>
          <p className='leading-loose sm:text-base'>
            React Native leverage the power of CSS and Javascript to create
            beautiful UI. with this you can create almost any kind of interface
            design for your mobile app that one can think of. We can help you
            achieve beautiful animations and interactions in your react native
            mobile apps.
          </p>
        </div>
        <div>
          <span className='text-2xl font-semibold sm:text-xl'>Native APIs</span>
          <p className='leading-loose sm:text-base'>
            Because of cross-platform development native Api&apos;s like camera
            and, GPS, etc are to be integrated natively along with react native.
            Our engineers are experts in that, we can easily bridge between
            native and cross-platform API&apos;s so your users don&apos;t have
            to hassle
          </p>
        </div>
      </div>
    </div>
  )
}
