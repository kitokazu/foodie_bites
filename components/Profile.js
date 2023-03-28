import Image from "next/image";
import {} from "@heroicons/react/24/outline";
import profilePic from "../images/headshot.jpeg";

import shirt from "../images/shirt.jpeg";
import shoes from "../images/shoes.jpeg";
import pants from "../images/pants.jpeg";
import hat from "../images/hat.jpeg";

import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import ProfileSidebar from "./ProfileSidebar";
import Posts from "./Posts";

function ProfilePage() {
  const { data: session } = useSession();

  const posts = [
    {
      img: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    },
    {
      img: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
    },
    {
      img: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
    },
    {
      img: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
  ];

  const photos = [
    { id: 1, src: shoes, title: "Shoes" },
    { id: 2, src: shirt, title: "Shirt" },
    { id: 3, src: hat, title: "Hat" },
    { id: 4, src: pants, title: "Pants" },
    // Add more photos here
  ];

  return (
    // <div className="max-w-6xl mx-5 p-10 xl:mx:auto ">
    //   <div className = "grid grid-cols-4 gap-4 shadow">

    //     {/* Sidebar for Profile */}
    //     <div className="avatar justify-center shadow">
    //       <div className="w-48 h-48 rounded-full overflow-hidden">
    //         <Image className="object-cover w-full h-full" width={64} height={64} src={session ? session.user.image : profilePic}/>
    //       </div>
    //       <div className="mt-10 col-span-2">
    //         <span className="text-gray-700 text-2xl mr-4">{session ? session.user.name : "Name"}</span>
    //         <Cog6ToothIcon className="cursor-pointer inline w-8 h-8 text-gray-700 rounded mr-4 mb-2"/>
    //         <div className="mt-1 flex flex-col">
    //           <div className="text-yellow-600">
    //             Active Buyer
    //           </div>
    //           <div className="mt-4">
    //             Purchases: <span className="font-semibold ml-1">0</span>
    //           </div>

    //         </div>
    //      </div>
    //     </div>

    //     {/* About Section */}
    //     <div>
    //       <div className="shadow">
    //         <span className="text-gray-700 text-2xl mr-4 font-semibold">About Me:</span>
    //         <div className="mt-4">
    //           Hey guys
    //         </div>
    //         <hr className="border-gray-500 mt-6"></hr>
    //         {/* <div className="flex justify-center gap-10">
    //           <button className="border-gray-800">PURCHASES</button>
    //           <button className="border-gray-800">SAVED</button>
    //         </div> */}
    //       </div>

    //       {/* Posts Section */}
    //       <div className="grid gap-4 shadow">
    //         <div className=" gap-4 flex">
    //           <Image className="w-96 h-96" src={profilePic}/>
    //           <Image src={profilePic}/>
    //           <Image src={profilePic}/>
    //         </div>
    //       </div>

    //       <Posts/>

    //     </div>

    //   </div>
    // </div>

    <div class="flex">
      <div class="w-1/4 bg-gray-200 h-screen">
        <div className="avatar justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Image
              className="object-cover w-full h-full"
              width={64}
              height={64}
              src={session ? session.user.image : profilePic}
            />
          </div>
          <div className="mt-10 col-span-2">
            <span className="text-gray-700 text-2xl mr-4">
              {session ? session.user.name : "Name"}
            </span>
            <Cog6ToothIcon className="cursor-pointer inline w-8 h-8 text-gray-700 rounded mr-4 mb-2" />
            <div className="mt-1 flex flex-col">
              <div className="text-yellow-600">Active Buyer</div>
              <div className="mt-4">
                Purchases: <span className="font-semibold ml-1">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-3/4 mt-5 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative m-2 w-1/3 h-72 shadow">
            <Image
              src={photo.src}
              alt={`Photo ${photo.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              {photo.title}
            </div>
          </div>
        ))}

        {/* {posts.map((post) => (
          <Image src={post.img ?? profilePic} />
        ))} */}
      </div>
    </div>
  );
}

// function ProfilePage() {
//   return (
//     <>
//       <div className="fixed top-0 h-screen w-72 m-0 flex flex-col bg-gray-100 shadow-lg">
//       </div>
//     </>
//   );
// }

export default ProfilePage;
