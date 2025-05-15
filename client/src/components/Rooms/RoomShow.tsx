import RoomCarousel from "./RoomCarousel";

function RoomShow() {
  return (
    <section className="md:flex justify-center mt-15 md:my-10 place-items-center">
      <div className="md:flex md:flex-col md:gap-5">
        <div className="md:flex md:justify-center">
          <RoomCarousel
            images={[
              "https://i.ibb.co/vvgzbNN6/chambre-1.png",
              "https://i.ibb.co/WvmBtbX5/chambre-1bis.png",
            ]}
          />
        </div>

        <div className="md:flex md:gap-5 md:justify-center flex md:mt-0 mt-5 ">
          <img
            src="https://i.ibb.co/rKJSVMdg/chambre-4.png"
            alt="room 2"
            className=" md:mr-0 mr-5 md:w-50 w-42 object-cover rounded-2xl "
          />
          <img
            src="https://i.ibb.co/FLyQPQrD/chambre-5.png"
            alt="room 3"
            className=" md:w-50 w-42 object-cover rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default RoomShow;
