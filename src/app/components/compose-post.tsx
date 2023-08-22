'use client'
import { ComposePostButton } from '@/app/components/compose-post-button'
import { addPost } from '../actions/add-post-action'
import { useRef } from 'react'

export function ComposePost ({ avatarUrl }: { avatarUrl: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form ref={formRef} className="flex flex-row space-x-2 p-2 border-b border-white/20" action={async (formData) => {
      await addPost(formData)
      formRef?.current?.reset()
    }}>
      <img src={avatarUrl} alt="user" className="rounded-full w-8 h-8 object-contain" />
      <div className="flex flex-col flex-1 gap-y-2">
        <textarea
          name="post"
          placeholder="¿¡Que esta pasando!?"
          rows={4}
          className="bg-black placeholder-gray-300 flex-1"
        >
        </textarea>
        <ComposePostButton />
      </div>
    </form>
  )
}
