import Image from 'next/image'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import profilePic from '../images/headshot.jpeg'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'

import bruxies from '../images/bruxies.jpeg'
import thaiTowne from '../images/thai-towne.jpeg'
import pizzaPress from '../images/pizza-press.jpeg'
import philz from '../images/philz.jpeg'

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

import StarRating from './StarRating'

export default function ProfileSidebar() {
  const { data: session } = useSession()

  const posts = [
    {
      id: 1,
      src: thaiTowne,
      title: 'Thai Towne',
      date: '04/01/2023',
      rating: 3,
      link: 'https://www.yelp.com/biz/thai-towne-eatery-orange',
    },
    {
      id: 2,
      src: bruxies,
      title: 'Bruxies',
      date: '03/20/2023',
      rating: 4,
      link: 'https://www.yelp.com/biz/bruxies-orange',
    },
    {
      id: 3,
      src: philz,
      title: 'Philz Coffee',
      date: '03/15/2023',
      rating: 5,
      link: 'https://www.yelp.com/biz/philz-coffee-orange',
    },
    {
      id: 4,
      src: pizzaPress,
      title: 'Pizza Press',
      date: '03/10/2023',
      rating: 3,
      link: 'https://www.yelp.com/biz/pizza-press-orange',
    },
  ]

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative m-2 w-1/3 h-96 shadow border-solid border-2 overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between p-5 ">
            <div>
              <a
                href={post.link}
                className="font-bold hover:text-blue-700 hover:underline"
              >
                {post.title}
              </a>
              <p className="text-s text-gray-500">{post.date}</p>
            </div>

            <StarRating rating={post.rating} />
          </div>

          {/* <p className="">{"04/01/2023"}</p> */}
          {/* Image */}
          <Image
            src={post.src}
            alt={`post ${post.id}`}
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
      ))}
    </>
  )
}
