import Image from "next/image";
import appLogo from '../images/mcdonalds_logo.png'

function Header() {
  return (
    <div className="flex justify-between bg-white max-w-6xl">
      {/* Left Side */}
      <div className="relative w-24">
        <Image 
          src={appLogo}
          alt="McDonalds Logo"
          width={200}
          height={100}
          />
      </div>
      {/* Center */}
      <div className="flex space-x-4 text-gray-700">
        <p className="link">Home</p>
      </div>

      {/* Right Side */}
    </div>
  );
}

export default Header