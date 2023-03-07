import Image from "next/image";
import {
} from "@heroicons/react/24/outline";
import McDonalds_Logo from '../images/mcdonalds_logo.png';
import profilePic from '../images/headshot.jpeg';

import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";



function ProfilePage() {
  const {data: session} = useSession();

  return (
    <div className="max-w-6xl mx-5 p-10 xl:mx:auto ">
      <div className = "grid grid-cols-4 gap-4">
        {/* Header for Profile */}
        <div className="avatar justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Image className="object-cover w-full h-full" width={64} height={64} src={session ? session.user.image : profilePic}/>
          </div>
          <div className="mt-10 col-span-2">
            <span className="text-gray-700 text-2xl mr-4">{session ? session.user.name : "Name"}</span>
            <Cog6ToothIcon className="cursor-pointer inline w-8 h-8 text-gray-700 rounded mr-4 mb-2"/>
            <div className="mt-1 flex flex-col">
              <div className="text-yellow-600">
                Active Buyer
              </div>
              <div className="mt-4">
                Posts: <span className="font-semibold ml-1">0</span>
              </div>
          
            </div>
         </div>
        </div>
        
      </div>
    </div>
  )
}

// function ProfilePage() {
//   return (
//     <>
//       <div className="fixed top-0 h-screen w-72 m-0 flex flex-col bg-gray-100 shadow-lg">
//       </div>
//     </>
//   );
// }

export default ProfilePage