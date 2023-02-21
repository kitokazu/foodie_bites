import Image from "next/image";
import McDonalds_Long from '../images/mcdonalds_long.jpeg';
import McDonalds from '../images/mcdonalds_logo.png';
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="flex justify-between bg-white max-w-6xl">
      {/* Left Side */}
      <div className="relative hidden lg:inline w-36 h-12 cursor-pointer">
        <Image 
          src={McDonalds_Long}
          alt="McDonalds Logo"
          fill="contain"
          style={{objectFit: "contain"}}
          />
      </div>

      <div className="relative w-24 h-24 lg:hidden flex-shrink-0 cursor-pointer">
        <Image 
          src={McDonalds}
          alt="McDonalds Logo"
          fill="contain"
          style={{objectFit: "contain"}}
          />
      </div>
      {/* Center */}
      <div className="relative mt-1 p-3 rounded-md">
        <div className="mt-2 absolute inset y-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500"/>
        </div>
        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black" type="text" placeholder="Search"/>
      </div>

      {/* Right Side */}
      <div className="flex space-x-4 text-gray-700">
        <p className="link">Home</p>
      </div>

    </div>
  );
}

export default Header