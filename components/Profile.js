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
        <div className="col-span-4">LUKE DRISCOLL</div>
        <div className="avatar">
          <div classname = "rounded-full w-36 h-36">
            <Image src={profilePic}/>
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