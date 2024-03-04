import type { Metadata } from 'next'
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          jetBrainsMono.variable,
          poppins.variable,
          'flex items-center justify-start w-screen max-w-full overflow-x-hidden flex-col bg-black px-36 pt-6 font-sans text-white antialiased sm:!p-5 sm:!py-7'
        )}
      >
        <TopNav className='mb-10 sm:hidden' />
        <BurgerMenu className='hidden sm:flex' />
        {children}
        <Footer />
      </body>
    </html>
  )
}
