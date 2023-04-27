import { useSession } from 'next-auth/react'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid'
import {
  HeartIcon,
  FaceSmileIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'

import StarRating from './StarRating'
import Image from 'next/image'
import { useEffect, useState } from 'react'
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
}) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const radius = 1000 // Radius of the search area in meters
  const type = 'restaurant' // Type of place to search for

  const newRating = rating + ''

  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)

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

  /*var axios = require('axios');

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log();
    })
    .catch((error) => {
      console.error(error);
  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${apiKey}`,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
*/

  /*function getLocation(ip) {
  const url = `https://geo.ipify.org/api/v2?apiKey=at_etN2Agi7mkKqdjfcDhYLN4UqfKHRf&ipAddress=${ip}`;
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      const location = JSON.parse(data);
      console.log("Latitude:", location.location.lat);
      console.log("Longitude:", location.location.lng);
    });
  });
} */
  return (
    <div
      className="bg-white my-7 border
            rounded-sm"
    >
      {/* Header */}
      <div className="flex items-center p-5">
        <Image
          src={userImg}
          width={500}
          height={500}
          alt=""
          className="h-16 w-16 rounded-full object-contain
                    border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <p className="flex-1 font-bold text-xl"> {restaurant}</p>
        <div>
          <StarRating rating={rating} />
          <p className="text-end mt-1">{date}</p>
        </div>
      </div>

      {/* Image */}
      <Image
        src={img}
        width={500}
        height={500}
        alt="IMAGE NOT FOUND"
        className="object-cover w-full h-full"
      />
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

            <ChatBubbleBottomCenterTextIcon className="btn" />
          </div>
          <Link href="https://cortinasitalianfood.com/">
            <BuildingStorefrontIcon className="btn" />
          </Link>
        </div>
      )}

      {/* Caption */}
      <p className="mt-2 ml-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{username}</span>
        {review}
      </p>
      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 mt-2 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}</span>{' '}
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
    </div>
  )
}

export default Post
