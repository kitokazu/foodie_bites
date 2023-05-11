import React from 'react'
import Image from 'next/image'
import PostTags from './PostTags'
import Modal from './Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function ExplorePost({ restaurant, location, image, tags }) {
  const convertTags = (tags) => {
    return tags.map((tag) => tag.title).join(', ')
  }

  const categories = convertTags(tags)
  // Set function
  const [open, setOpen] = useRecoilState(modalState)

  return (
    <div
      className="flex bg-white my-7 border
          rounded-sm"
    >
      {/* Body 1 */}
      <div className="flex">
        {/* Image */}
        <div className="ml-12 rounded-xl w-64 h-80 overflow-hidden">
          <Image
            src={image}
            width={500}
            height={500}
            alt="IMAGE NOT FOUND"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Header */}
      <div className="ml-3 items-center p-5">
        <p className={`text-5xl font-sans font-bold uppercase mb-3`}>
          {restaurant}
        </p>
        <PostTags tags={categories} className="" />
        <div className="text-start mr-10 mt-4">
          <p className="text-xl font-sans custom-gray font-bold">
            {location[0]}
          </p>
          <p className="text-xl font-sans custom-gray font-bold">
            {location[1]}
          </p>
        </div>

        {/*Post a review*/}
        <button
          onClick={() => setOpen(true)}
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          POST A REVIEW
        </button>
      </div>
    </div>
  )
}
