import Image from "next/image";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import profilePic from "../images/headshot.jpeg";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfileSidebar() {
  const { data: session } = useSession();
  <div className="avatar justify-center shadow">
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
  </div>;
}
