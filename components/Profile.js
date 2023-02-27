import Image from "next/image";
import {
} from "@heroicons/react/24/outline";
import McDonalds_Logo from '../images/mcdonalds_logo.png';

import { useRouter } from 'next/router'

function ProfilePage() {
  return (
    <>
      <div className="fixed top-0 h-screen w-72 m-0 flex flex-col bg-gray-100 shadow-lg">
        
         {/* Add "Profile" Text */}
          <i>A</i>
          <i>B</i>
          {/* Picture */}
          {/* <Image src={McDonalds_Logo}
            alt="McDonalds Logo"
            fill="contain"
            style={{objectFit: "contain"}}
          /> */}
      </div>
    </>
  );
}

export default ProfilePage