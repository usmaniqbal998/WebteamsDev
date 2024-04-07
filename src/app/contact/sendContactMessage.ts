'use server'

import { FormData } from '@/app/contact/formSchema'
import { promisify } from 'util'

export const sendContactMessage = async (formData: FormData) => {
  // Implement email sending here

  await promisify(setTimeout)(3000) // Remove this line when implement the real logic
}
