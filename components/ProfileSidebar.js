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

import amazing from '../public/images/amazing.png'
import awful from '../public/images/awful.png'
import meh from '../public/images/meh.png'
import okay from '../public/images/okay.png'
import great from '../public/images/great.png'

function ProfileSidebar({ username, image }) {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])

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
  }, [db, session, username])

  // Get the length of the posts that are ranked 5
  const fiveStarPosts = posts.filter(
    (post) => Math.floor(post.data().rating) == 5
  )
  const fiveStarPostsLength = fiveStarPosts.length

  // Get the length of the posts that are ranked 4
  const fourStarPosts = posts.filter(
    (post) => Math.floor(post.data().rating) == 4
  )
  const fourStarPostsLength = fourStarPosts.length

  // Get the length of the posts that are ranked 3
  const threeStarPosts = posts.filter(
    (post) => Math.floor(post.data().rating) == 3
  )
  const threeStarPostsLength = threeStarPosts.length

  // Get the length of the posts that are ranked 2
  const twoStarPosts = posts.filter(
    (post) => Math.floor(post.data().rating) == 2
  )
  const twoStarPostsLength = twoStarPosts.length

  // Get the length of the posts that are ranked 1 or 0
  const oneStarPosts = posts.filter(
    (post) =>
      Math.floor(post.data().rating) == 1 || Math.floor(post.data().rating) == 0
  )

  const oneStarPostsLength = oneStarPosts.length

  const reviewColor = (rating) => {
    if (Math.floor(rating) == 1 || Math.floor(rating) == 0) {
      return 'text-awful'
    } else if (Math.floor(rating) == 2) {
      return 'text-meh'
    } else if (Math.floor(rating) == 3) {
      return 'text-okay'
    } else if (Math.floor(rating) == 4) {
      return 'text-great'
    } else if (Math.floor(rating) == 5) {
      return 'text-amazing'
    }
    return 'text-gray-500'
  }

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
            <div className="mt-4 text-xl">
              Reviews:{' '}
              <span className="font-semibold ml-1">{posts.length}</span>
            </div>
            {/** RATINGS AND COUNTS **/}
            <div className="mt-4 ml-3">
              <div className="w-16 h-16 flex">
                <Image
                  src={amazing}
                  width={500}
                  height={500}
                  alt="IMAGE NOT FOUND"
                  className="object-cover w-full h-full "
                />
                <p className="text-4xl ml-3 mt-3 font-sans font-bold text-amazing">
                  {fiveStarPostsLength}
                </p>
              </div>
              <div className="mt-5 w-16 h-16 flex">
                <Image
                  src={great}
                  width={500}
                  height={500}
                  alt="IMAGE NOT FOUND"
                  className="object-cover w-full h-full "
                />
                <p className="text-4xl ml-3 mt-3 font-sans font-bold text-great">
                  {fourStarPostsLength}
                </p>
              </div>
              <div className="mt-5 w-16 h-16 flex">
                <Image
                  src={okay}
                  width={500}
                  height={500}
                  alt="IMAGE NOT FOUND"
                  className="object-cover w-full h-full "
                />
                <p className="text-4xl ml-3 mt-3 font-sans font-bold text-okay">
                  {threeStarPostsLength}
                </p>
              </div>
              <div className="mt-5 w-16 h-16 flex">
                <Image
                  src={meh}
                  width={500}
                  height={500}
                  alt="IMAGE NOT FOUND"
                  className="object-cover w-full h-full "
                />
                <p className="text-4xl ml-3 mt-3 font-sans font-bold text-meh">
                  {twoStarPostsLength}
                </p>
              </div>
              <div className="mt-5 w-16 h-16 flex">
                <Image
                  src={awful}
                  width={500}
                  height={500}
                  alt="IMAGE NOT FOUND"
                  className="object-cover w-full h-full "
                />
                <p className="text-4xl ml-3 mt-3 font-sans font-bold text-awful">
                  {oneStarPostsLength}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar
