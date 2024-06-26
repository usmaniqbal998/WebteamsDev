'use client'

import { Input } from '@/Components/ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendContactMessage } from '@/app/contact/sendContactMessage'
import { useEffect, useState } from 'react'
import { cn } from '@/Util'
import { FormData, formSchema } from '@/app/contact/formSchema'

export default function Contract() {
  useEffect(() => {
    const onResize = () => {
      const vw = Math.max(
        window.innerWidth,
        document.documentElement.clientWidth
      )
      const leftPadding = Math.pow(vw, 3.8) * 0.000000000148 - 130
      console.log({ leftPadding })
      const form = document.querySelector(
        '#form-container'
      ) as HTMLDivElement | null
      if (!form) return
      form.style.paddingLeft = `${leftPadding}px`
    }

    onResize()
    window.addEventListener('resize', onResize)
    window.addEventListener('load', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', onResize)
    }
  }, [])

  const { register, formState, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const [pending, setPending] = useState(false)

  const { errors } = formState

  const handleContactForm: SubmitHandler<FormData> = async (
    formData,
    event
  ) => {
    event?.preventDefault()
    setPending(true)
    await sendContactMessage(formData)

    setPending(false)
    reset()
  }

  return (
    <div
      className={cn(
        'grid size-full grid-cols-12 grid-rows-1 group-first/footer:bg-red-500',
        'sm:grid-cols-1 sm:grid-rows-12 sm:justify-center sm:items-center sm:gap-y-5 sm:mt-4'
      )}
      data-page='contact'
    >
      <div
        className={cn(
          'col-span-5 flex size-[200%] -translate-x-1/2 -translate-y-1/2 items-end justify-end bg-neutral-800',
          'sm:col-span-1 sm:row-span-3 sm:translate-y-0 -translate-x-1/2 sm:h-full sm:w-[400%]'
        )}
      >
        <div className='flex h-[40%] w-1/2 items-start sm:h-full sm:items-center sm:text-center'>
          <span className='block text-[84px] leading-[110%] lg:text-6xl md:text-3xl sm:w-6/12 [&_mark]:font-semibold [&_mark]:text-green-500'>
            <mark>&quot;</mark>We love <br /> to hear <br /> from <br /> you
            <mark>&quot;</mark>
          </span>
        </div>
      </div>
      <div
        className={cn(
          'col-span-7 flex w-full flex-col items-start justify-center gap-16 sm:gap-8',
          'sm:row-span-9 sm:pl-0'
        )}
        id='form-container'
      >
        <form
          onSubmit={handleSubmit(handleContactForm)}
          className='flex w-8/12 flex-col gap-y-[2vh] sm:w-full'
          method='POST'
        >
          <Input
            disabled={pending}
            type='text'
            placeholder='Name'
            {...register('name')}
            error={errors}
          />
          <Input
            disabled={pending}
            type='email'
            placeholder='Email'
            {...register('email')}
            error={errors}
          />
          <Input
            disabled={pending}
            type='number'
            placeholder='Phone'
            {...register('phone')}
            error={errors}
          />
          <Input
            disabled={pending}
            type='text'
            placeholder='Tell us about your project'
            {...register('aboutProject')}
            error={errors}
          />
          <button
            disabled={pending}
            data-pending={pending}
            type='submit'
            className='flex h-10 w-3/12 items-center justify-center gap-4 rounded-full bg-white text-sm font-semibold text-black transition-transform duration-500 data-[pending=true]:bg-neutral-400'
          >
            <span data-pending={pending} className='data-[pending=true]:hidden'>
              Send
            </span>
            <div
              data-pending={pending}
              className='loader w-2/12 data-[pending=false]:hidden'
            ></div>
          </button>
        </form>

        <div className='flex flex-col gap-4 sm:gap-2'>
          <span className='text-neutral-400'>Support</span>
          <span className='text-xl sm:text-base'>info@webteams.dev</span>
        </div>
      </div>
    </div>
  )
}
