import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface SwiperCarouselProps {
  images: string[];
}

function SwiperCarousel({ images }: SwiperCarouselProps) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="custom-swiper max-w-2xl mx-auto"
    >
      {images.map((src) => (
        <SwiperSlide key={src}>
          <img
            src={src}
            alt={`Slide for ${src}`}
            className="w-full h-[400px] md:h-[600px] object-contain rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperCarousel;
