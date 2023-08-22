import { type Database } from '@/app/types/database'

type PostEntity = Database['public']['Tables']['posts']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Post = PostEntity & {
  user: UserEntity
}
export type User = Omit<UserEntity, 'created_at'>
