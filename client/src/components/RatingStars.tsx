import { useState } from "react";

interface RatingStarsProps {
  rating?: number; // Optional prop for fixed rating
}

function RatingStars({ rating }: RatingStarsProps) {
  const [Rated, setRated] = useState(rating || 0);
  const toggleRating = (star: number) => {
    if (rating === undefined) {
      setRated((prev) => (prev === star ? 0 : star));
    }
  };
  return (
    <section className="flex space-x-0.5 mb-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          onClick={() => toggleRating(star)}
          className={`transition transform duration-200 hover:scale-110 focus:scale-110  cursor-pointer
        ${star <= Rated ? "text-yellow-300" : "text-gray-400"}
        
   `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={star <= Rated ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            <title>{star <= Rated ? "Rated Star" : "Default Star"}</title>
            {/* equivalent au ALT pour une image*/}
          </svg>
        </button>
      ))}
    </section>
  );
}

export default RatingStars;
