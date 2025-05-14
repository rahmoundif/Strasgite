import React, { useState } from "react";

interface RoomCarouselProps {
  images: string[];
}

const RoomCarousel: React.FC<RoomCarouselProps> = ({ images }) => {
  const slides = images;
  const [current, setCurrent] = useState(0);
  const count = slides.length;

  const prev = () => setCurrent((c) => (c - 1 + count) % count);
  const next = () => setCurrent((c) => (c + 1) % count);

  if (count === 0) return null;

  return (
    <div className="relative w-full">
      {/*Slides container */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/*arrows */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
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
            className="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer"
            aria-label="Next slide"
          >
            <img
              src="/next.png"
              alt="right Slide"
              className="z-99 w-5 h-auto invert"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default React.memo(RoomCarousel);
