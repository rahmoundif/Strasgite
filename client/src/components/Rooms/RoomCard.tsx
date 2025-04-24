import Heart from "../Heart";
import RatingStars from "../RatingStars";
import RoomCarousel from "../Rooms/RoomCarousel";

interface RoomCardProps {
  title: string;
  description: string;
  price: string | number;
}

function RoomCard({ title, description, price }: RoomCardProps) {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden ">
      <div className=" relative z-20">
        <Heart />
      </div>
      <div className="relative">
        <RoomCarousel />
      </div>
      <div className="m-5">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="pb-3 ">
            <RatingStars />
          </div>
        </div>

        <div className="gap-4 mt-2">
          <p className="text-sm text-gray-600">{description}</p>

          <div className="flex flex-wrap justify-center items-start gap-2 pt-6">
            <img src="wifi.png" alt="WiFi" className="w-5 h-5" />
            <img src="concierge-bell.png" alt="Service" className="w-6 h-6" />
            <img src="bed-double.png" alt="Bed double" className="w-6 h-6" />
            <img src="bed-single.png" alt="Bed Single" className="w-6 h-6" />
            <img
              src="accessibility.png"
              alt="Accessibility"
              className="w-6 h-6"
            />
            <img
              src="sun-snow.png"
              alt="air conditioning"
              className="w-6 h-6"
            />
          </div>

          <div className="flex justify-between items-center mt-3">
            <span className="font-bold">{price} €</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
