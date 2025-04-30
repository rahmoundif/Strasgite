import { useState } from "react";
import { useRooms } from "../../context/RoomsContext";

function RoomCarousel() {
  const { rooms } = useRooms();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = rooms.length;

  const previous = () =>
    setCurrentSlide((s) => (s - 1 + slideCount) % slideCount);
  const next = () => setCurrentSlide((s) => (s + 1) % slideCount);

  return (
    <div className="relative w-full">
      {/* A. Slides container */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {rooms.map((room, i) => (
          <div
            key={room.key}
            className={`
              absolute inset-0
              transition-opacity duration-700
              ${i === currentSlide ? "opacity-100 z-10" : "opacity-0"}
            `}
          >
            <img
              src={room.imageUrl}
              alt={`Room ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* C. Prev & Next arrows */}
      <button
        type="button"
        onClick={previous}
        className="absolute inset-y-0 left-0 flex items-center px-4 cursor-pointer"
        aria-label="Previous slide"
      >
        <img
          src="/previous.png"
          alt="left Slide"
          className="z-99 w-5 h-auto invert"
        />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer "
        aria-label="Next slide"
      >
        <img
          src="/next.png"
          alt="right Slide"
          className="z-99 w-5 h-auto invert"
        />
      </button>
    </div>
  );
}

export default RoomCarousel;
