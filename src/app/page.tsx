import { AuthButtonServer } from '@/app/components/auth-button-server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PostList } from './components/post-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'
import { type Post } from './types/posts'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase.from('posts').select('*, user:users(name, user_name, avatar_url)').order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full min-h-screen max-w-[600px] mx-auto border-l border-r border-white/30 ">
        <header className="w-full flex justify-between items-center p-2 border-b border-white/10">
          <h1 className="font-bold text-xl">Home</h1>
          <AuthButtonServer />
        </header>
        <ComposePost avatarUrl={data.session.user?.user_metadata?.avatar_url }/>
        <PostList posts={posts as Post[]} />
      </section>
    </main>
  )
}
