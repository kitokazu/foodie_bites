import React from 'react'

function PostTags({ rating, tags }) {
  let tagsList = []
  if (tags) {
    tagsList = tags.split(',')
  }

  return (
    <div className="flex">
      {tagsList.map((tag) => (
        <div className="flex">
          <div className="h-2 w-2 mt-2 rounded-full bg-custom-gray"></div>
          <p className="font-bold ml-1 text-xl custom-gray">{tag}</p>
          <div className="rounded-full ml-1 w-6 h-6 overflow-hidden"></div>
        </div>
      ))}
    </div>
  )
}

export default PostTags
