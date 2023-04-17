import Image from "next/image";
import McDonalds_Long from "../images/mcdonalds_long.jpeg";
import McDonalds from "../images/mcdonalds_logo.png";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  UserCircleIcon,
  Bars3Icon,
  EnvelopeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  console.log(session);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
        {/* Left Side */}
        <div
          className="relative hidden lg:inline w-36 h-12 cursor-pointer"
          onClick={() => router.push("/")}
        >
          {/* <Image 
            src={McDonalds_Long}
            alt="McDonalds Logo"
            fill="contain"
            style={{objectFit: "contain"}}
            /> */}
          <div className="text-3xl font-serif text-stone-600 mt-5 ml-5">
            FoodieBites
          </div>
        </div>

        <div className="relative w-24 h-24 lg:hidden flex-shrink-0 cursor-pointer">
          <div className="text-3xl font-serif text-stone-600 mt-5 ml-5">FB</div>
        </div>

        {/* Center --- SEARCH BAR */}
        <div className="relative mt-3 p-3 rounded-md">
          <div className="mt-2 absolute inset y-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Right Side */}
        <div className="flex dark:text-black items-center justify-end space-x-4">
          <HomeIcon
            className="navBtn"
            onClick={() => router.push("/homePage")}
          />

          {session ? (
            <>
              <div className="relative navBtn">
                <EnvelopeIcon
                  className="navBtn"
                  onClick={() => router.push("/messagePage")}
                />
                <div className="absolute -top-2 -right-2 text-s w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <Bars3Icon className="h-6 md:hidden cursor-pointer" />
              <Image
                onClick={() => router.push("/profilePage")}
                src={session.user.image}
                alt="profile pic"
                className="rounded-full cursor-pointer"
                width={40}
                height={40}
              />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={signOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
