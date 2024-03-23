'use client'

import { useState } from 'react'

export const Test = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <button
        onClick={() => {
          setText('hello')
        }}
      >
        aaaaaaaaaaa
      </button>
    </div>
  )
}
