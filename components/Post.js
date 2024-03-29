import { useSession } from 'next-auth/react'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid'
import {
  HeartIcon,
  FaceSmileIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingStorefrontIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'

import StarRating from './StarRating'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'
import PostTags from './PostTags'
import DeleteModal from './DeleteModal'

import amazing from '../public/images/amazing.png'
import awful from '../public/images/awful.png'
import meh from '../public/images/meh.png'
import okay from '../public/images/okay.png'
import great from '../public/images/great.png'

import vegan_amazing from '../public/images/vegan_amazing.png'
import vegan_great from '../public/images/vegan_great.png'
import vegan_okay from '../public/images/vegan_okay.png'
import vegan_meh from '../public/images/vegan_meh.png'
import vegan_awful from '../public/images/vegan_awful.png'

function Post({
  id,
  username,
  userImg,
  img,
  restaurant,
  rating,
  link,
  review,
  date,
  location,
  tags,
}) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const radius = 1000 // Radius of the search area in meters
  // const type = 'restaurant' // Type of place to search for

  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'posts', id, 'comments')), (snapshot) =>
        setComments(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'posts', id, 'likes')), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    )
  }, [likes])

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
  }
  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timeStamp: serverTimestamp(),
    })
  }

  const handleClick = () => {
    router.push({
      pathname: '/profilePage',
      query: { name: username, image: userImg },
    })
  }

  const handleCommentClick = (commentUsername, commentImage) => {
    router.push({
      pathname: '/profilePage',
      query: { name: commentUsername, image: commentImage },
    })
  }

  const reviewColor = () => {
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

  const reviewTitle = () => {
    if (Math.floor(rating) == 1 || Math.floor(rating) == 0) {
      return 'AWFUL'
    } else if (Math.floor(rating) == 2) {
      return 'MEH'
    } else if (Math.floor(rating) == 3) {
      return 'OKAY'
    } else if (Math.floor(rating) == 4) {
      return 'GREAT'
    } else if (Math.floor(rating) == 5) {
      return 'AMAZING'
    }
    return 'N/A'
  }

  const reviewImage = {
    0: awful,
    1: awful,
    2: meh,
    3: okay,
    4: great,
    5: amazing,
  }

  const deletePost = async (postId) => {
    try {
      // 1) Delete the post document from the 'posts' collection
      await deleteDoc(doc(db, 'posts', postId))

      // 2) Delete the image file from Firebase Storage
      const imageRef = ref(storage, `posts/${postId}/image`)
      await deleteObject(imageRef)

      console.log(`Post with ID ${postId} successfully deleted.`)
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  return (
    <div
      className="bg-white my-7 border
            rounded-sm"
    >
      {/* Header */}
      <div className="flex items-center p-5">
        <p
          className={`text-5xl ml-3 font-sans font-bold uppercase post ${reviewColor()}`}
        >
          {restaurant}
        </p>
        <div className="flex-1"></div>
        {/* Location */}
        <div className="text-end mt-2 w-60">
          <p className="text-xl font-sans custom-gray font-bold">{location}</p>
        </div>
      </div>

      {/* Body 1 */}
      <div className="flex pr-2">
        {/* Image */}
        <div className="ml-12 rounded-xl w-64 h-80 overflow-hidden">
          <Image
            src={img}
            width={500}
            height={500}
            alt="IMAGE NOT FOUND"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side of the body */}
        <div>
          <div className="items-center ml-5">
            {/* TAGS */}
            <PostTags rating={Math.floor(rating)} tags={tags} />

            {/* RATING */}
            <div className="flex mt-5">
              <div className="rounded-full w-24 h-24 overflow-hidden">
                <Image
                  src={reviewImage[Math.floor(rating)]}
                  width={500}
                  height={500}
                  alt="IMAGE NOT FOUND"
                  className="object-cover w-full h-full "
                />
              </div>
              <p className={`text-4xl font-bold mt-7 ml-3  ${reviewColor()}`}>
                {reviewTitle()}
              </p>
            </div>

            {/* REVIEW */}
            <p className="mt-10">"{review}"</p>
          </div>
        </div>
      </div>

      {/* BODY 2 */}
      <div className="flex items-center p-5">
        <Image
          src={userImg}
          width={500}
          height={500}
          alt=""
          className="h-12 w-12 rounded-full object-contain
                    border p-1 mr-3"
        />
        <p
          className="text-xl font-sans font-bold uppercase post custom-gray cursor-pointer transition-colors duration-200 hover:text-blue-500 hover:underline"
          onClick={handleClick}
        >
          {username}
        </p>
        <div className="flex-1"></div>
        <div className="text-start">
          <p className="text-xl font-sans custom-gray font-bold">{date}</p>
        </div>
      </div>

      {/* Buttons */}
      {session && (
        <div className="flex justify-between pt-4 px-4 pb-1">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
          </div>
          <Link href="https://cortinasitalianfood.com/">
            <BuildingStorefrontIcon className="btn" />
          </Link>
          {session.user.username === username ? (
            <TrashIcon className="btn" onClick={() => setShowModal(true)} />
          ) : (
            <div></div>
          )}
        </div>
      )}

      {/* Caption */}
      <div className="mt-2 ml-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1 text-xl font-sans custom-gray">
            {likes.length} likes
          </p>
        )}
      </div>

      <hr />
      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-5 mt-2 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span
                  className="text-xl font-sans font-bold custom-gray cursor-pointer transition-colors duration-200 hover:text-blue-500 hover:underline"
                  onClick={() =>
                    handleCommentClick(
                      comment.data().username,
                      comment.data().userImage
                    )
                  }
                >
                  {comment.data().username}
                </span>{' '}
                {comment.data().comment}
              </p>

              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timeStamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input Box*/}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="font-semibold text-blue-400"
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}

      {/* Confirmation modal */}
      {showModal && (
        <DeleteModal postId={id} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default Post
