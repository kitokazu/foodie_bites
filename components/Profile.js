import Image from "next/image";
import {
} from "@heroicons/react/24/outline";
import McDonalds_Logo from '../images/mcdonalds_logo.png';
import profilePic from '../images/headshot.jpeg';

import { useRouter } from 'next/router'


function ProfilePage() {
  return (
    <div className="max-w-6xl mx-5 p-10 xl:mx:auto">
      <div className = "grid grid-cols-4 gap-4">
        {/* Header for Profile */}
        <div className="col-span-4">
          <div className="text-gray-700 text-2xl mr-4">
            LUKE DRISCOLL
          </div>
        </div>
        <div className="avatar">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Image className="object-cover w-full h-full" src={profilePic}/>
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