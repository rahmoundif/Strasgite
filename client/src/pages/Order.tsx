import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      localStorage.removeItem("search");
      localStorage.removeItem("reservationDates");
      navigate("/");
    }, 15500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  if (!reservation || !search)
    return (
      <p className="text-center text-red-600 mt-20 md:mt-40">
        Une erreur de chargement empêche l’exécution correcte de la page. Merci
        de réessayer{" "}
      </p>
    );

  return (

    <>
      <div className="p-6 max-w-xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">
          Récapitulatif de votre réservation
        </h1>
        <div className="flex justify-around items-center border rounded-gray-300 rounded-xl p-4 space-y-2">
          <ul className="space-y-1">
            <li>Arrivée : {reservation.start.toLocaleDateString()}</li>
            <li>Départ : {reservation.end.toLocaleDateString()}</li>
            <li>Nombre de nuits : {reservation.nights}</li>
            <li>Voyageurs : {search.nombreVoyageurs}</li>
            <li>Enfants : {search.nombreEnfants}</li>
            <li>Lits simples : {search.nombreLitsSimples}</li>
            <li>Lits doubles : {search.nombreLitsDoubles}</li>
            <li>PMR : {search.nombrePmr}</li>
            <li>
              Petit-déjeuner : {search.petitDej === "oui" ? "Oui" : "Non"}
            </li>
          </ul>
          <div>
            {/*-------------------------------toChange----------------------------------*/}
            <img
              src="./avatar_f_asiatique.png"
              alt="chambre selectionnée"
              className="w-40 h-40 border-1 rounded-full"
            />
          </div>
        </div>

        <div className="border-t pt-4 space-y-1 grid grid-cols-2 gap-3">
          <p>Chambre (base 75€/nuit) :</p>
          <p className="text-end"> {totals.chambre.toFixed(2)} €</p>
          <p>Petit-déjeuner :</p>
          <p className="text-end"> {totals.petitsDej.toFixed(2)} €</p>
          <p>Taxe de séjour :</p>
          <p className="text-end"> {totals.taxeSejour.toFixed(2)} €</p>
          <p>TVA :</p>
          <p className="text-end"> {totals.tva.toFixed(2)} €</p>
          <p className="font-bold">Total :</p>
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
                className="w-24 h-20"
              />
              CB
            </button>

            <button
              type="button"
              onClick={() => setSelectedPayment("paypal")}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-100 shadow-md"
            >
              {/* logo PayPal */}
              <img src="./paypal.png" alt="Paypal" className="w-31.5 h-20" />
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
                className="w-31.5 h-20"
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
                className="w-31.5 h-20"
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
                ← Choisir un autre moyen
              </button>
              <h2 className="font-bold">Paiement Carte Bleue</h2>
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
                Confirmer le paiement
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
                ← Choisir un autre moyen
              </button>
              <h2 className="font-bold">Paiement PayPal</h2>
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
                ← Choisir un autre moyen
              </button>
              <h2 className="font-bold">Paiement Apple Pay</h2>
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
                ← Choisir un autre moyen
              </button>
              <h2 className="font-bold">Paiement Google Pay</h2>
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
              En attente de validation...
            </p>
          )}
        </div>

        {bankStep === 2 && reservation && search && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-xl max-w-md w-full text-center space-y-2">
              <h2 className="text-xl font-bold text-green-700">
                ✅ Paiement validé
              </h2>
              <p>
                Merci <strong>{paymentInfo.name}</strong>, votre réservation est
                enregistrée.
              </p>
              <p>
                Numéro : <strong>{reservationCounter - 1}</strong>
              </p>
              <p>
                Dates :{" "}
                <strong>{reservation.start.toLocaleDateString()}</strong> →{" "}
                <strong>{reservation.end.toLocaleDateString()}</strong>
              </p>
              <p>
                Durée : <strong>{reservation.nights}</strong> nuit(s)
              </p>
              <p>
                Voyageurs : <strong>{search.nombreVoyageurs}</strong>
              </p>
              <p>
                Enfants : <strong>{search.nombreEnfants}</strong>
              </p>
              <p>
                Petit-déjeuner :{" "}
                <strong>{search.petitDej === "oui" ? "Oui" : "Non"}</strong>
              </p>
              <p>
                Total payé : <strong>{totals.total.toFixed(2)} €</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Order;
