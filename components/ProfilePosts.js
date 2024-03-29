import Image from 'next/image'
import {
  Cog6ToothIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline'
import profilePic from '../images/headshot.jpeg'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import Select from 'react-select'

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
import { useAnimationFrame } from 'framer-motion'

import amazing from '../public/images/amazing.png'
import awful from '../public/images/awful.png'
import meh from '../public/images/meh.png'
import okay from '../public/images/okay.png'
import great from '../public/images/great.png'

const reviewImage = {
  0: awful,
  1: awful,
  2: meh,
  3: okay,
  4: great,
  5: amazing,
}

const reviewColor = (rating) => {
  if (rating == 1 || rating == 0) {
    return 'text-awful'
  } else if (rating == 2) {
    return 'text-meh'
  } else if (rating == 3) {
    return 'text-okay'
  } else if (rating == 4) {
    return 'text-great'
  } else if (rating == 5) {
    return 'text-amazing'
  }
  return 'text-gray-500'
}

const reviewTitle = (rating) => {
  if (rating == 1 || rating == 0) {
    return 'AWFUL'
  } else if (rating == 2) {
    return 'MEH'
  } else if (rating == 3) {
    return 'OKAY'
  } else if (rating == 4) {
    return 'GREAT'
  } else if (rating == 5) {
    return 'AMAZING'
  }
  return 'N/A'
}

const options = [
  { value: 'date', label: 'Date' },
  { value: 'rating', label: 'Rating' },
]

export default function ProfilePosts({ username, image }) {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])

  const [sort, setSort] = useState('date')

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
  }, [db, session, username, sort])

  const sortPosts = (posts, sortType) => {
    if (sortType == 'date') {
      return posts.sort(
        (a, b) => b.data().timestamp?.toDate() - a.data().timestamp?.toDate()
      )
    } else if (sortType == 'rating') {
      // Sort by the date first and then rating
      return posts.sort((a, b) => b.data().rating - a.data().rating)
    }
  }

  const handleChange = (selectedOption) => {
    setSort(selectedOption.value)
  }

  return (
    <div>
      <div className="flex justify-end">
        <p className="text-end mr-5 mt-1">Sort by :</p>
        <Select className="mr-10" options={options} onChange={handleChange} />
      </div>
      {sortPosts(posts, sort).map((post) => {
        const date = post.data().timestamp?.toDate().toString()

        // console.log(post.data().timestamp?.toDate().toString())
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().review}
            rating={post.data().rating}
            restaurant={post.data().restaurant}
            review={post.data().review}
            location={post.data().location}
            tags={post.data().tags}
            date={<Moment fromNow>{date}</Moment>}
          />
        )
      })}
    </div>
  )
}
