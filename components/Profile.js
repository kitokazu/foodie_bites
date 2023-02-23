import Image from "next/image";
import {
} from "@heroicons/react/24/outline";
import McDonalds_Logo from '../images/mcdonalds_logo.png';

import { useRouter } from 'next/router'

function ProfilePage() {
  return (
    <>
      <div className="">
        {/* Picture */}
        <Image src={McDonalds_Logo}
          alt="McDonalds Logo"
          fill="contain"
          style={{objectFit: "contain"}}
          />
      </div>
    </>
  );
}

export default ProfilePage