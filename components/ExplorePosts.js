import React from 'react'
import Image from 'next/image'
import ExplorePost from './ExplorePost'

// Dummy data

export default function ExplorePosts({ props }) {
  console.log(props)
  return (
    <div>
      {props.map((post) => {
        // console.log(post.data().timestamp?.toDate().toString())
        return (
          <ExplorePost
            restaurant={post.name}
            location={post.location.display_address}
            image={post.image_url}
          />
        )
      })}
    </div>
  )
}
