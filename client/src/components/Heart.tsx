import { useState } from "react";

function Heart() {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <button
      type="button"
      onClick={toggleLike}
      className={`
        absolute top-4 right-4 transition duration-300 ease-in-out hover:scale-150 cursor-pointer
        ${isLiked ? "text-red-500" : "text-gray-400"}
      `}
      aria-label={isLiked ? "Default" : "Liked"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isLiked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <title>{isLiked ? "Liked heart" : "Basic heart"}</title>
        {/* equivalent au ALT pour une image*/}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z"
        />
      </svg>
    </button>
  );
}

export default Heart;
