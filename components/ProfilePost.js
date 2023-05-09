// THIS IS CURRENTLY NOT IN USE

import React from 'react'

export default function ProfilePost({
  id,
  img,
  restaurant,
  rating,
  link,
  date,
  location,
}) {
  return (
    <>
      {sortPosts(posts).map((post) => {
        const date = post.data().timestamp?.toDate().toString()
        return (
          <div
            key={post.id}
            className="relative m-2 w-1/3 shadow border-solid border-2 overflow-hidden"
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
                <Moment format="MM/DD/YYYY" className="flex">
                  {date}
                </Moment>
              </div>
              <div className="flex">
                <p
                  className={`text-3xl font-bold mt-3 mr-3  ${reviewColor(
                    Math.floor(post.data().rating)
                  )}`}
                >
                  {reviewTitle(Math.floor(post.data().rating))}
                </p>
                <div className="roudned-full w-16 h-16 overflow-hidden">
                  {' '}
                  <Image
                    src={reviewImage[Math.floor(post.data().rating)]}
                    width={500}
                    height={500}
                    alt="IMAGE NOT FOUND"
                    className="object-cover w-full h-full "
                  />
                </div>
              </div>
            </div>

            {/* <p className="">{"04/01/2023"}</p> */}
            {/* Image */}
            <Image
              src={post.data().image}
              width={500}
              height={500}
              alt={`post ${post.id}`}
              className="w-full h-72 overflow-hidden object-cover cursor-pointer"
            />
            {/* Buttons */}
            <div className="flex justify-between items-center rounded-b-lg text-xl p-2">
              <div className="flex items-center">
                <HeartIcon className="h-7 mr-1" />
                <p className="mr-3">{7}</p>
                <ChatBubbleBottomCenterIcon className="h-7 mr-1" />
                <p className="mr-3">{7}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
