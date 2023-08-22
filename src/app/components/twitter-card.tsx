'use client'
import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'

interface Props {
  name: string
  username: string
  avatarurl: string
  content: string
}

export function TwitterCard ({ name, username, avatarurl, content }: Props) {
  return (
    <Card className="w-full bg-transparent shadow-none hover:bg-slate-800 border-b border-white/10 rounded-none cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Avatar isBordered radius="full" size="md" src={avatarurl} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-white">{ name }</h4>
            <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-900">
        <p>
          { content }
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1 items-center">
          <button><IconMessageCircle className="w-4 h-4"/></button>
          <p className="text-white text-small">4</p>
        </div>
        <div className="flex gap-1 items-center">
          <button><IconHeart className="w-4 h-4" /></button>
          <p className="text-white text-small">4</p>
        </div>
        <div className="flex gap-1 items-center">
          <button><IconRepeat className="w-4 h-4"/></button>
          <p className="text-white text-small">4</p>
        </div>
      </CardFooter>
    </Card>
  )
}
