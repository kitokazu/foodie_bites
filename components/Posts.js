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
        sortPosts(posts)
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
    // Sort the posts by the timestamp and setPosts
    setPosts(
      posts.sort((a, b) => {
        return (
          b.data().timestamp?.toDate().getTime() -
          a.data().timestamp?.toDate().getTime()
        )
      })
    )
  }

  // Sorting the posts by the Timestamp
  useEffect(() => {
    sortPosts(posts)
    console.log(posts)
  })

  // date={(post.data().timestamp).map((timestamp) => timestamp.toDate())}

  return (
    <div>
      {posts.map((post) => {
        const date = post.data().timestamp?.toDate().toString()

        console.log(post.data().timestamp?.toDate().toString())
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
            date={<Moment fromNow>{date}</Moment>}
          />
        )
      })}
    </div>
  )
}

export default Posts
