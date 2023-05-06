import Post from './Post'
import { useState, useEffect, use } from 'react'
import { collection, query, onSnapshot, orderBy } from '@firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Using snapshot listener from firebase
    onSnapshot(
      query(collection(db, 'posts')),
      orderBy('timestamp', 'desc'),
      (snapshot) => {
        setPosts(snapshot.docs)
      }
    )
  }, [db])

  // console.log(
  //   posts.map((post) => {
  //     console.log(post.data().timestamp?.toDate().toString())
  //   })
  // )

  const sortPosts = (posts) => {
    return posts.sort(
      (a, b) => b.data().timestamp?.toDate() - a.data().timestamp?.toDate()
    )
  }

  // Sorting the posts by the Timestamp

  // useEffect(() => {
  //   console.log(posts)
  //   sortPosts(posts)
  // })

  // date={(post.data().timestamp).map((timestamp) => timestamp.toDate())}

  return (
    <div>
      {sortPosts(posts).map((post) => {
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
            date={<Moment fromNow>{date}</Moment>}
          />
        )
      })}
    </div>
  )
}

export default Posts
