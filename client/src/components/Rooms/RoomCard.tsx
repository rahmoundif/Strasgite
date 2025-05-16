import { useForm } from "../../context/FormContext";
import type { Room } from "../../context/RoomsContext";
import Heart from "../Heart";
import RatingStars from "../RatingStars";
import RoomCarousel from "../Rooms/RoomCarousel";

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const { handleSubmit, loading } = useForm();
  const {
    title,
    description,
    price,
    kids,
    singleBed,
    sb_n,
    doubleBed,
    db_n,
    pmrRoom,
    images,
  } = room;
  const slideImages = images.slice(0, 2);

  return (
    <div className="rounded-2xl shadow-xl overflow-hidden relative">
      {/* Bouton like */}
      <div className="absolute top-1 right-1 z-20">
        <Heart />
      </div>

      {/* Carousel ou image unique */}
      <div className="relative">
        <RoomCarousel images={slideImages} />
      </div>

      <div className="m-5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <RatingStars />
        </div>

        <p className="text-sm text-gray-600 mt-2">{description}</p>

        {/* Detail de la chambre */}
        <div className="flex flex-wrap gap-4 mt-10">
          {kids > 0 && (
            <div className="flex items-center">
              <img src="/baby.png" alt="Enfants" className="w-5 h-5 mr-1" />
              <span>{kids}</span>
            </div>
          )}

          {doubleBed && (
            <div className="flex items-center">
              <img
                src="/bed-double.png"
                alt="Lits doubles"
                className="w-6 h-6 mr-1"
              />
              <span>{db_n}</span>
            </div>
          )}

          {singleBed && (
            <div className="flex items-center">
              <img
                src="/bed-single.png"
                alt="Lits simples"
                className="w-6 h-6 mr-1"
              />
              <span>{sb_n}</span>
            </div>
          )}

          {pmrRoom && (
            <img src="/accessibility.png" alt="PMR" className="w-6 h-6" />
          )}
        </div>

        {/* Prix */}
        <div className="mt-10 text-right text-lg font-bold justify-between flex">
          <button
            onClick={handleSubmit}
            type="button"
            className="py-2 px-5 bg-[#a84448] hover:bg-[#922f33] rounded-lg text-white text-base font-semibold transition duration-200"
          >
            {loading ? (
              <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              "Reserver"
            )}
          </button>

          {price}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
