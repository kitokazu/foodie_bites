import React from 'react'
import Image from 'next/image'

// Dummy data

export default function ExplorePosts({ name, image, location }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
      <div className="w-1/3">
        <Image src={image} alt={name} width={400} height={400} />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  )
}
