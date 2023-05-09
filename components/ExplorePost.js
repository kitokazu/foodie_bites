import React from 'react'
import Image from 'next/image'

export default function ExplorePost({ restaurant, location, image }) {
  return (
    <div
      className="bg-white my-7 border
          rounded-sm"
    >
      {/* Header */}
      <div className="flex items-center p-5">
        <p className={`text-5xl ml-3 font-sans font-bold uppercase`}>
          {restaurant}
        </p>
        <div className="flex-1"></div>
        <div className="text-start mr-10 mt-2">
          <p className="text-xl font-sans custom-gray font-bold">
            {location[0]}
          </p>
          <p className="text-xl font-sans custom-gray font-bold">
            {location[1]}
          </p>
        </div>
      </div>

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
    </div>
  )
}
