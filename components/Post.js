import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

import {
  HeartIcon,
  BookmarkSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

import StarRating from "./StarRating";

function Post({
  id,
  username,
  userImg,
  img,
  restaurant,
  rating,
  link,
  review,
  date,
}) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const radius = 1000; // Radius of the search area in meters
  const type = "restaurant"; // Type of place to search for

  const newRating = rating + "";

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&location=-33.8670522,151.1957362&radius=${radius}&type=${type}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log();
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div
      className="bg-white my-7 border
            rounded-sm"
    >
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="h-16 w-16 rounded-full object-contain
                    border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
      </div>

      {/* Image */}
      <img src={img} alt="" className="object-cover" />
      {/* Buttons */}
      <div className="flex justify-between pt-4 px-4 pb-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleBottomCenterTextIcon className="btn" />
        </div>

        <BuildingStorefrontIcon className="btn" />
        <p></p>
      </div>
      {/* Caption */}
      {/* Comments */}
      {/* Input Box*/}
    </div>
  );
}

export default Post;
