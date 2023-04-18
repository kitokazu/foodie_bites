import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

import {
  HeartIcon,
  FaceSmileIcon,
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

  /*var axios = require('axios');

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log();
    })
    .catch((error) => {
      console.error(error);
  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${apiKey}`,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
*/

  /*function getLocation(ip) {
  const url = `https://geo.ipify.org/api/v2?apiKey=at_etN2Agi7mkKqdjfcDhYLN4UqfKHRf&ipAddress=${ip}`;
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      const location = JSON.parse(data);
      console.log("Latitude:", location.location.lat);
      console.log("Longitude:", location.location.lng);
    });
  });
}

// Example usage:
getLocation("123.45.67.89"); // Replace with the user's IP address*/

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
      <img src={img} alt="" className="object-cover w-full" />
      {/* Buttons */}
      <div className="flex justify-between pt-4 px-4 pb-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleBottomCenterTextIcon className="btn" />
        </div>

        <BuildingStorefrontIcon className="btn" />
      </div>
      {/* Caption */}
      {/* Comments */}
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
      {/* Input Box*/}
    </div>
  );
}

export default Post;
