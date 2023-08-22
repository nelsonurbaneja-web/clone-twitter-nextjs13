import { TwitterCard } from './twitter-card'
import { type Post } from '@/app/types/posts'

export function PostList ({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {posts?.map(post => {
        const { id, user, content } = post
        const { name, user_name: username, avatar_url: avatarurl } = user

        return (
          <TwitterCard key={id} name={name ?? ''} username={username} avatarurl={avatarurl} content={content ?? ''} />
        )
      })}
    </>
  )
}
