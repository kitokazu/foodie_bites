import Image from "next/image";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import profilePic from "../images/headshot.jpeg";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import shirt from "../images/shirt.jpeg";
import shoes from "../images/shoes.jpeg";
import pants from "../images/pants.jpeg";
import hat from "../images/hat.jpeg";

import bruxies from "../images/bruxies.jpeg";
import thaiTowne from "../images/thai-towne.jpeg";
import pizzaPress from "../images/pizza-press.jpeg";
import philz from "../images/philz.jpeg";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

export default function ProfileSidebar() {
  const { data: session } = useSession();

  const photos = [
    { id: 1, src: thaiTowne, title: "Thai Towne" },
    { id: 2, src: bruxies, title: "Bruxies" },
    { id: 3, src: philz, title: "Philz Coffee" },
    { id: 4, src: pizzaPress, title: "Pizza Press" },
    // Add more photos here
  ];

  return (
    <>
      {photos.map((photo) => (
        <div key={photo.id} className="relative m-2 w-1/3 h-72 shadow">
          {/* Header */}
          <div className="flex items-center p-5 shadow">
            <p className="cursor-pointer font-bold">{photo.title}</p>
          </div>

          {/* Image */}
          <Image
            src={photo.src}
            alt={`Photo ${photo.id}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );
}
