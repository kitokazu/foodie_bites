import Image from 'next/image'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import profilePic from '../images/headshot.jpeg'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'

import bruxies from '../images/bruxies.jpeg'
import thaiTowne from '../images/thai-towne.jpeg'
import pizzaPress from '../images/pizza-press.jpeg'
import philz from '../images/philz.jpeg'

import Post from './Post'
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

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

import StarRating from './StarRating'

export default function ProfileSidebar() {
  const { data: session } = useSession()

  // const posts = [
  //   {
  //     id: 1,
  //     src: thaiTowne,
  //     title: 'Thai Towne',
  //     date: '04/01/2023',
  //     rating: 3,
  //     link: 'https://www.yelp.com/biz/thai-towne-eatery-orange',
  //   },
  //   {
  //     id: 2,
  //     src: bruxies,
  //     title: 'Bruxies',
  //     date: '03/20/2023',
  //     rating: 4,
  //     link: 'https://www.yelp.com/biz/bruxies-orange',
  //   },
  //   {
  //     id: 3,
  //     src: philz,
  //     title: 'Philz Coffee',
  //     date: '03/15/2023',
  //     rating: 5,
  //     link: 'https://www.yelp.com/biz/philz-coffee-orange',
  //   },
  //   {
  //     id: 4,
  //     src: pizzaPress,
  //     title: 'Pizza Press',
  //     date: '03/10/2023',
  //     rating: 3,
  //     link: 'https://www.yelp.com/biz/pizza-press-orange',
  //   },
  // ]

  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Using snapshot listener from firebase
    if (session) {
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
      console.log('IN SESSION')
    }
  }, [db, session])

  const sortPosts = (posts) => {
    // Sort the posts by the timestamp and setPosts
    setPosts(
      posts.sort((a, b) => {
        return (
          b.data().timestamp?.toDate().getTime() -
          a.data().timestamp?.toDate().getTime()
        )
      })
    )
  }

  // Sorting the posts by the Timestamp
  useEffect(() => {
    sortPosts(posts)
    console.log(posts)
  })

  return (
    <>
      {posts.map((post) => {
        const date = post.data().timestamp?.toDate().toString()
        return (
          <div
            key={post.id}
            className="relative m-2 w-1/3 h-96 shadow border-solid border-2 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between p-5 ">
              <div>
                <a
                  href={post.data().restaurant}
                  className="font-bold hover:text-blue-700 hover:underline"
                >
                  {post.data().restaurant}
                </a>
              </div>
              <div>
                <StarRating rating={post.data().rating} />
                <Moment format="MM/DD/YYYY" className="flex justify-end">
                  {date}
                </Moment>
              </div>
            </div>

            {/* <p className="">{"04/01/2023"}</p> */}
            {/* Image */}
            <Image
              src={post.data().image}
              width={500}
              height={500}
              alt={`post ${post.id}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        )
      })}
    </>
  )
}
