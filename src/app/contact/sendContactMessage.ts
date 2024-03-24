'use server'

import { promisify } from 'util'

export const sendContactMessage = async () => {
  // Implement email sending here

  await promisify(setTimeout)(3000) // Remove this line when implement the real logic
}
