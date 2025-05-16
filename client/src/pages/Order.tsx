import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomCarousel from "../components/Rooms/RoomCarousel";
import { useTranslation } from "../context/TranslationContext";

interface SearchData {
  motif: string;
  nombreLitsSimples: number;
  nombreLitsDoubles: number;
  nombreVoyageurs: number;
  nombreEnfants: number;
  nombrePmr: number;
  petitDej: string;
}

interface Reservation {
  start: Date;
  end: Date;
  nights: number;
  allDates: string[];
  cb?: string;
  paypal?: string;
  applepay?: string;
  googlepay?: string;
}

let reservationCounter = 21215;

const Order = () => {
  const { text_translation } = useTranslation();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [search, setSearch] = useState<SearchData | null>(null);
  const [totals, setTotals] = useState({
    chambre: 0,
    petitsDej: 0,
    taxeSejour: 0,
    tva: 0,
    total: 0,
  });
  const [bankStep, setBankStep] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState<
    "cb" | "paypal" | "applepay" | "googlepay" | null
  >(null);
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    card: "",
    date: "",
    crypto: "",
  });

  useEffect(() => {
    const rawDates = localStorage.getItem("reservationDates");
    const rawSearch = localStorage.getItem("search");

    if (rawDates && rawSearch) {
      const parsedDates: string[] = JSON.parse(rawDates);
      const start = new Date(parsedDates[0]);
      const end = new Date(parsedDates[parsedDates.length - 1]);
      const nights = parsedDates.length;
      setReservation({ start, end, nights, allDates: parsedDates });

      const parsedSearch: SearchData = JSON.parse(rawSearch);
      setSearch(parsedSearch);

      const nbPersonnes =
        parsedSearch.nombreVoyageurs + parsedSearch.nombreEnfants;
      const chambre = 75 * nights;
      const petitsDej =
        parsedSearch.petitDej === "oui" ? nbPersonnes * nights * 10 : 0;
      const taxeSejour = nbPersonnes * nights * 1;
      const totalHT = chambre + petitsDej + taxeSejour;
      const tva = totalHT * 0.1;
      const total = totalHT + tva;

      setTotals({ chambre, petitsDej, taxeSejour, tva, total });
    }
  }, []);

  const handlePay = () => {
    setBankStep(1);
    setTimeout(() => setBankStep(2), 3500);
    setTimeout(() => {
      const resaData = {
        nom: paymentInfo.name,
        numReservation: reservationCounter++,
        dateReservation: new Date().toLocaleDateString(),
        nbPersonnes:
          (search?.nombreVoyageurs || 0) + (search?.nombreEnfants || 0),
        duree: reservation?.nights,
        petitDejeuner: search?.petitDej === "oui" ? "Oui" : "Non",
        dates: reservation?.allDates,
        total: totals.total || 0,
      };
      localStorage.setItem("resavalide", JSON.stringify(resaData));
      /* localStorage.removeItem("search");
      localStorage.removeItem("reservationDates"); */
      navigate("/");
    }, 12500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  if (!reservation || !search)
    return (
      <p className="text-center text-red-600 mt-20 md:mt-40">
        {text_translation("loading_error")}{" "}
      </p>
    );

  return (
    <>
      <div className="p-6 max-w-xl mx-auto space-y-4 ">
        <h1 className="text-2xl font-bold text-center">
          {text_translation("order_title")}
        </h1>
        <div className="">
          {/*-------------------------------Room Picture----------------------------------*/}

          <RoomCarousel
            images={[
              "https://i.ibb.co/vvgzbNN6/chambre-1.png",
              "https://i.ibb.co/WvmBtbX5/chambre-1bis.png",
            ]}
          />
        </div>
        <div className="border-t pt-4 space-y-1 grid grid-cols-2 gap-3">
          <p>{text_translation("arrival")}</p>{" "}
          <p className="text-end"> {reservation.start.toLocaleDateString()}</p>
          <p>{text_translation("departure")}</p>{" "}
          <p className="text-end">{reservation.end.toLocaleDateString()}</p>
          <p>{text_translation("night")}</p>{" "}
          <p className="text-end">{reservation.nights}</p>
          <p>{text_translation("travelers")}</p>{" "}
          <p className="text-end">{search.nombreVoyageurs}</p>
          <p>{text_translation("children")}</p>{" "}
          <p className="text-end">{search.nombreEnfants}</p>
          <p>{text_translation("single_beds")}</p>{" "}
          <p className="text-end">{search.nombreLitsSimples}</p>
          <p>{text_translation("double_beds")}</p>{" "}
          <p className="text-end">{search.nombreLitsDoubles}</p>
          <p>{text_translation("pmr")}</p>{" "}
          <p className="text-end">{search.nombrePmr}</p>
          <p>{text_translation("breakfast")}</p>{" "}
          <p className="text-end">
            {search.petitDej === "oui" ? "Oui" : "Non"}
          </p>
        </div>

        <div className="border-t pt-4 space-y-1 grid grid-cols-2 gap-3">
          <p>{text_translation("room_price")}</p>
          <p className="text-end"> {totals.chambre.toFixed(2)} €</p>
          <p>{text_translation("breakfast_price")}</p>
          <p className="text-end"> {totals.petitsDej.toFixed(2)} €</p>
          <p>{text_translation("tourist_tax")}</p>
          <p className="text-end"> {totals.taxeSejour.toFixed(2)} €</p>
          <p>{text_translation("vat")}</p>
          <p className="text-end"> {totals.tva.toFixed(2)} €</p>
          <p className="font-bold">{text_translation("total")}</p>
          <p className="text-end"> {totals.total.toFixed(2)} €</p>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {/* Tant qu’aucun paiement n’est sélectionné, j’affiche tous les boutons */}
        {!selectedPayment && (
          <div className="flex flex-col sm:flex-row gap-4 text-center">
            <button
              type="button"
              onClick={() => setSelectedPayment("cb")}
              className="flex  items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 shadow-md"
            >
              {/* logo CB */}
              <img
                src="./credit-card.png"
                alt="Carte Bleue"
                className="w-20 h-20 "
              />
              CB
            </button>

            <button
              type="button"
              onClick={() => setSelectedPayment("paypal")}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 shadow-md"
            >
              <div className="">
                {/* logo PayPal */}
                <img
                  src="./paypal.png"
                  alt="Paypal"
                  className="w-20 h-20 mx-10"
                />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPayment("applepay")}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 shadow-md"
            >
              {/* logo Apple Pay */}
              <img
                src="./apple-pay.png"
                alt="Apple Pay"
                className="w-20 h-20 mx-10"
              />
            </button>

            <button
              type="button"
              onClick={() => setSelectedPayment("googlepay")}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 shadow-md"
            >
              {/* logo Google Pay */}
              <img
                src="./google-pay.png"
                alt="Google Pay"
                className="w-20 h-20 mx-10"
              />
            </button>
          </div>
        )}
        <div className="flex flex-col justify-center mt-6">
          {/* Dès qu’un paiement est sélectionné, je n’affiche que son formulaire + un bouton “Retour” */}
          {selectedPayment === "cb" && (
            <div className="border p-4 bg-gray-100 space-y-2">
              <button
                type="button"
                onClick={() => setSelectedPayment(null)}
                className="text-blue-600 hover:underline mb-2"
              >
                {text_translation("choose_other_method")}
              </button>
              <h2 className="font-bold">{text_translation("payment_cb")}</h2>
              <input
                className="w-full p-1 border"
                placeholder="Nom"
                name="name"
                onChange={handleChange}
              />
              <input
                className="w-full p-1 border"
                placeholder="Numéro de carte"
                name="card"
                onChange={handleChange}
              />
              <input
                className="w-full p-1 border"
                placeholder="Date d'expiration"
                name="date"
                onChange={handleChange}
              />
              <input
                className="w-full p-1 border"
                placeholder="Cryptogramme"
                name="crypto"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={handlePay}
                className="bg-green-600 text-white px-4 py-2 rounded mt-4"
              >
                {text_translation("confirm_payment")}
              </button>
            </div>
          )}

          {selectedPayment === "paypal" && (
            <div className="border p-4 bg-gray-100 space-y-2">
              <button
                type="button"
                onClick={() => setSelectedPayment(null)}
                className="text-blue-600 hover:underline mb-2"
              >
                {text_translation("choose_other_method")}
              </button>
              <h2 className="font-bold">
                {text_translation("payment_paypal")}
              </h2>
              <button
                type="button"
                onClick={handlePay}
                className="flex items-center gap-2 px-4 py-2 border rounded bg-white hover:bg-gray-100 shadow-md"
              >
                {/* ton SVG PayPal */}
                Payer avec PayPal
              </button>
            </div>
          )}

          {selectedPayment === "applepay" && (
            <div className="border p-4 bg-gray-100 space-y-2">
              <button
                type="button"
                onClick={() => setSelectedPayment(null)}
                className="text-blue-600 hover:underline mb-2"
              >
                {text_translation("choose_other_method")}
              </button>
              <h2 className="font-bold">
                {text_translation("payment_applepay")}
              </h2>
              <button
                type="button"
                onClick={handlePay}
                className="flex items-center gap-2 px-4 py-2 border rounded bg-white hover:bg-gray-100 shadow-md"
              >
                {/* ton SVG Apple Pay */}
                Payer avec Apple Pay
              </button>
            </div>
          )}

          {selectedPayment === "googlepay" && (
            <div className="border p-4 bg-gray-100 space-y-2">
              <button
                type="button"
                onClick={() => setSelectedPayment(null)}
                className="text-blue-600 hover:underline mb-2"
              >
                {text_translation("choose_other_method")}
              </button>
              <h2 className="font-bold">
                {text_translation("payment_googlepay")}
              </h2>
              <button
                type="button"
                onClick={handlePay}
                className="flex items-center gap-2 px-4 py-2 border rounded bg-white hover:bg-gray-100 shadow-md"
              >
                {/* ton SVG Google Pay */}
                Payer avec Google Pay
              </button>
            </div>
          )}

          {/* Et côté “attente de validation” */}
          {bankStep === 1 && (
            <p className="text-center text-gray-600 mt-4">
              {text_translation("waiting_validation")}
            </p>
          )}
        </div>

        {bankStep === 2 && reservation && search && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-xl max-w-md w-full text-center space-y-2">
              <h2 className="text-xl font-bold text-green-700">
                ✅ {text_translation("payment_validated")}
              </h2>
              <p>
                {text_translation("tank_you")}{" "}
                <strong>{paymentInfo.name}</strong>,{" "}
                {text_translation("reservation_recorded")}
              </p>
              <p>
                {text_translation("number")}
                <strong>{reservationCounter - 1}</strong>
              </p>
              <p>
                {text_translation("dates")}{" "}
                <strong>{reservation.start.toLocaleDateString()}</strong> →{" "}
                <strong>{reservation.end.toLocaleDateString()}</strong>
              </p>
              <p>
                {text_translation("duration")}
                <strong>{reservation.nights}</strong>{" "}
                {text_translation("night")}
              </p>
              <p>
                {text_translation("travelers")}
                <strong>{search.nombreVoyageurs}</strong>
              </p>
              <p>
                {text_translation("children")}
                <strong>{search.nombreEnfants}</strong>
              </p>
              <p>
                {text_translation("breakfast")}{" "}
                <strong>{search.petitDej === "oui" ? "Oui" : "Non"}</strong>
              </p>
              <p>
                {text_translation("paid_total")}
                <strong>{totals.total.toFixed(2)} €</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Order;
