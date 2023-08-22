'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostButton () {
  const { pending } = useFormStatus()

  return (
    <button className='bg-sky-500 rounded-full px-5 py-2 self-end disabled:opacity-40' disabled={pending}>
      {pending ? 'Posteando post' : 'Postear post'}
    </button>
  )
}
