'use client'

import { Input } from '@/Components/ui/input'
import { useForm } from 'react-hook-form'
import {} from '@hookform/resolvers/zod'
import { z } from 'zod'

const numbersRegex = /^\d+$/

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().refine(value => numbersRegex.test(value)),
  aboutProject: z.string().min(1)
})

export default function Contract() {
  const { register, formState } = useForm()
  const { errors } = formState

  return (
    <div
      className='grid size-full grid-cols-12 grid-rows-1 group-first/footer:bg-red-500'
      data-page='contact'
    >
      <div className='col-span-5 flex size-[200%] -translate-x-1/2 -translate-y-1/2 items-end justify-end bg-neutral-800'>
        <div className='flex h-[45%] w-1/2 items-start'>
          <span className='block w-8/12 text-[84px] leading-[1.05] [&_mark]:font-semibold [&_mark]:text-green-500'>
            <mark>&quot;</mark>We love to hear from you<mark>&quot;</mark>
          </span>
        </div>
      </div>
      <div className='col-span-7 flex w-full flex-col items-start justify-center gap-16 pl-28'>
        <form action='' className='flex w-3/6 flex-col gap-y-[2vh]'>
          <Input type='text' placeholder='Name' {...register('name')} />
          <Input type='email' placeholder='Email' {...register('email')} />
          <Input type='number' placeholder='Phone' {...register('phone')} />
          <Input
            type='text'
            placeholder='Tell us about your project'
            {...register('aboutProject')}
          />
          <button
            type='submit'
            className='w-min rounded-full bg-white px-4 py-2 text-sm font-semibold text-black'
          >
            Send
          </button>
        </form>

        <div className='flex flex-col gap-4 '>
          <span className='text-neutral-400'>Support</span>
          <span>info@webteams.com</span>
        </div>
      </div>
    </div>
  )
}
