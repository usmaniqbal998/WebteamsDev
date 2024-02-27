import Link from 'next/link'

export function ContactUsButton() {
  // jfsdljflsdka

  return (
    <Link
      href='/contact'
      className='flex h-11 w-32 items-center justify-center rounded-full bg-white p-2 text-center text-sm font-semibold text-black lg:w-28 lg:text-xs'
    >
      CONTACT US
    </Link>
  )
}
