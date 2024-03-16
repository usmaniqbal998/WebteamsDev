import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono as JetBrainsMono, Poppins } from 'next/font/google'
import './globals.css'
import { TopNav } from '../Components/TopNav'
import { BurgerMenu } from '@/Components/BurgerMenu'
import { cn } from '@/Util'
import { Footer } from '@/Components/Footer'

// const jetBrainsMono = JetBrains_Mono({})
// 700 400

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '400', '500', '600', '700']
})

const jetBrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
  // weight: ['100', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: false,
  initialScale: 1
}

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode
  }>
) {
  return (
    <html
      lang='en'
      className='h-screen w-screen !max-w-full scrollbar scrollbar-track-neutral-700 scrollbar-thumb-neutral-500'
    >
      <body
        className={cn(
          jetBrainsMono.variable,
          poppins.variable,
          'flex items-center h-screen justify-start overflow-y-scroll overflow-x-hidden max-w-full flex-col bg-black px-36 pt-6 font-sans text-white antialiased sm:!px-5 sm:!pt-7'
        )}
      >
        <TopNav className='mb-10 flex px-4 sm:invisible sm:hidden' />
        <BurgerMenu className='invisible hidden sm:visible sm:flex' />
        {props.children}
        <Footer className='group/footer' />
      </body>
    </html>
  )
}
