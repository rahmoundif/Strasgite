import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendrier from "../components/Calendrier";
import SearchFilterRooms from "../components/SearchFilterRooms";
import { useLogin } from "../context/LoginContext";
import { useTranslation } from "../context/TranslationContext";

function Reservation() {
  const { text_translation } = useTranslation();
  const navigate = useNavigate();
  const { isConnected, userRole } = useLogin();

  useEffect(() => {
    if (
      isConnected === true &&
      (userRole === "User" || userRole === "Europe")
    ) {
      navigate("/Reservation");
    } else {
      navigate("/LogIn");
    }
  }, [isConnected, userRole, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="xl:mt-[-35px]">
        <SearchFilterRooms />
      </div>

      <div className="px-5 py-5 xl:mx-20">
        <Calendrier />
      </div>

      <div className="mb-4 text-center text-sm text-[#2c7865]">
        <p>{text_translation("reservation_instr1")}</p>
        <p>{text_translation("reservation_instr2")}</p>
      </div>
    </>
  );
}

export default Reservation;
