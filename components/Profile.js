import Image from 'next/image'
import {} from '@heroicons/react/24/outline'
import profilePic from '../images/headshot.jpeg'

import shirt from '../images/shirt.jpeg'
import shoes from '../images/shoes.jpeg'
import pants from '../images/pants.jpeg'
import hat from '../images/hat.jpeg'

import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import ProfileSidebar from './ProfileSidebar'
import ProfilePosts from './ProfilePosts'

function ProfilePage({ user, image }) {
  console.log(user)
  return (
    <div class="flex">
      <ProfileSidebar username={user} image={image} />
      <div className="flex flex-wrap items-center justify-center h-full w-3/4 mt-5 gap-20">
        <ProfilePosts username={user} image={image} />
      </div>
    </div>
  )
}

export default ProfilePage
