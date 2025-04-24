function RoomShow() {
  return (
    <section className="md:flex justify-center my-10 place-items-center m-10">
      <div className="md:flex md:flex-col md:gap-5">
        <div className="md:flex md:justify-center">
          <img
            src="https://i.ibb.co/vvgzbNN6/chambre-1.png"
            alt="room 1"
            className=" md:w-105 object-cover rounded-2xl"
          />
        </div>

        <div className="md:flex md:gap-5 md:justify-center flex md:mt-0 mt-5 ">
          <img
            src="https://i.ibb.co/rKJSVMdg/chambre-4.png"
            alt="room 2"
            className=" md:mr-0 mr-5 md:w-50 w-36 object-cover rounded-2xl "
          />
          <img
            src="https://i.ibb.co/FLyQPQrD/chambre-5.png"
            alt="room 3"
            className=" md:w-50 w-36 object-cover rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default RoomShow;
