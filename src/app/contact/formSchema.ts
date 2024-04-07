import { z } from 'zod'

const numbersRegex = /^\d+$/

export const formSchema = z.object({
  name: z.string().min(1, 'A name is required.'),
  email: z.string().email('Invalid email.'),
  phone: z
    .string()
    .refine(
      (value: unknown) => typeof value === 'string' && numbersRegex.test(value),
      'Should be numbers only.'
    ),
  aboutProject: z.string().min(1, 'A message is required.')
})

export type FormData = z.infer<typeof formSchema>
