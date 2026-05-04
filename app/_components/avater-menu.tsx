'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { signOut, useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation';
import React from 'react'

const AvaterMenu = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="cursor-pointer">
          <Avatar>
            <AvatarImage src={session?.user?.image ?? ''} />
            <AvatarFallback className="bg-purple-600 text-white font-semibold">
              {session?.user?.name?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">

        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className='flex space-x-2 items-center'>
                <Avatar>
                    <AvatarImage src={session?.user?.image || ''}/>
                    <AvatarFallback className='bg-purple-600 font-semibold text-white'>
                        {session?.user.name[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0">
              <h3 className="font-semibold text-sm">{session?.user?.name}</h3>
              <p className="text-xs text-muted-foreground truncate">{session?.user?.email}</p>
            </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            className="text-red-500 focus:text-red-500 cursor-pointer"
            onClick={async () => {
                await signOut();
                router.push("/login")
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvaterMenu