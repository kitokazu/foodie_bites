import Image from 'next/image'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import profilePic from '../images/profile.png'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState, useEffect, use } from 'react'
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from '@firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'

function ProfileSidebar({ username, image }) {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])

  console.log(username)

  useEffect(() => {
    // Using snapshot listener from firebase
    if (session && !username) {
      onSnapshot(
        query(
          collection(db, 'posts'),
          where('username', '==', session.user.username)
        ),
        orderBy('timestamp', 'desc'),

        (snapshot) => {
          setPosts(snapshot.docs)
        }
      )
    } else {
      onSnapshot(
        query(collection(db, 'posts'), where('username', '==', username)),
        orderBy('timestamp', 'desc'),

        (snapshot) => {
          setPosts(snapshot.docs)
        }
      )
    }
  }, [db, session])

  return (
    <div className="w-1/4 bg-gray-200 h-screen">
      <div className="avatar justify-center ml-10">
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            width={64}
            height={64}
            src={image ? image : session ? session.user.image : profilePic}
            alt={null}
          />
        </div>
        <div className="mt-10 col-span-2">
          <span className="text-gray-700 text-2xl mr-4">
            {username ? username : session ? session.user.name : 'Name'}
          </span>
          <Cog6ToothIcon className="cursor-pointer inline w-8 h-8 text-gray-700 rounded mr-4 mb-2" />
          <div className="mt-1 flex flex-col">
            <div className="text-yellow-600">Active Foodie</div>
            <div className="mt-4">
              Reviews:{' '}
              <span className="font-semibold ml-1">{posts.length}</span>
            </div>
            <div className="mt-4">
              Favorite Places: <span className="font-semibold ml-1">Canes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar
