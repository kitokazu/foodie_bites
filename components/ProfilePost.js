import Image from "next/image";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import profilePic from "../images/headshot.jpeg";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import shirt from "../images/shirt.jpeg";
import shoes from "../images/shoes.jpeg";
import pants from "../images/pants.jpeg";
import hat from "../images/hat.jpeg";

export default function ProfileSidebar() {
  const { data: session } = useSession();

  const posts = [
    {
      img: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    },
    {
      img: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
    },
    {
      img: "https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
    },
    {
      img: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    },
  ];

  const photos = [
    { id: 1, src: shoes, title: "Shoes" },
    { id: 2, src: shirt, title: "Shirt" },
    { id: 3, src: hat, title: "Hat" },
    { id: 4, src: pants, title: "Pants" },
    // Add more photos here
  ];

  return (
    <div className="flex flex-wrap items-center justify-center h-full w-3/4 mt-5 gap-10">
      {photos.map((photo) => (
        <div key={photo.id} className="relative m-2 w-1/3 h-72 shadow">
          <Image
            src={photo.src}
            alt={`Photo ${photo.id}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            {photo.title}
          </div>
        </div>
      ))}
    </div>
  );
}
