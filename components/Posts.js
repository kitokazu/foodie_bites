import Post from './Post'
import { useState, useEffect } from 'react'
import { collection, query, onSnapshot, orderBy } from '@firebase/firestore'
import { db } from '../firebase'

// const posts = [
//   {
//     id: "123",
//     username: "rrezvani01",
//     userImg:
//       "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
//     img: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
//     caption: "This is dope",
//   },
//   {
//     id: "456",
//     username: "kitokazu",
//     userImg:
//       "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
//     img: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
//     caption: "How interesting",
//   },
//   {
//     id: "789",
//     username: "cattleLover123",
//     userImg:
//       "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
//     img: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
//     caption: "What an awesome day",
//   },
//   {
//     id: "101112",
//     username: "warriorsLover123",
//     userImg:
//       "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
//     img: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
//     caption: "Coolio",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Using snapshot listener from firebase
    return onSnapshot(
      query(collection(db, 'posts')),
      orderBy('timestamp', 'desc'),
      (snapshot) => {
        setPosts(snapshot.docs)
      }
    )
  }, [db])

  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
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
        />
      ))}
    </div>
  )
}

export default Posts
