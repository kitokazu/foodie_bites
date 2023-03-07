import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid"

function Post({ id, username, userImg, img, caption }) {
    return (
        <div className="bg-white my-7 border
            rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img src={userImg} alt="" 
                    className="h-16 w-16 rounded-full object-contain
                    border p-1 mr-3"/>
                <p className="flex-1 font-bold">{username}</p>
                <EllipsisHorizontalIcon className="h-5"/>
            </div>

            {/* Image */}
            <img src={img} alt="" 
                className="object-cover"/>
            {/* Buttons */}
            {/* Caption */}
            {/* Comments */}
            {/* Input Box*/}
        </div>
    )
}

export default Post;