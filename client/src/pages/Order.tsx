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
  const [showPayment, setShowPayment] = useState(false);
  const [bankStep, setBankStep] = useState(0);
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
    setTimeout(() => setBankStep(2), 1500);
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
      };
      localStorage.setItem("resavalide", JSON.stringify(resaData));
      navigate("/");
    }, 3500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  if (!reservation || !search) return <p>Chargement...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Récapitulatif de votre réservation</h1>
      <ul className="space-y-1">
        <li>Arrivée : {reservation.start.toLocaleDateString()}</li>
        <li>Départ : {reservation.end.toLocaleDateString()}</li>
        <li>Nombre de nuits : {reservation.nights}</li>
        <li>Voyageurs : {search.nombreVoyageurs}</li>
        <li>Enfants : {search.nombreEnfants}</li>
        <li>Lits simples : {search.nombreLitsSimples}</li>
        <li>Lits doubles : {search.nombreLitsDoubles}</li>
        <li>PMR : {search.nombrePmr}</li>
        <li>Petit-déjeuner : {search.petitDej === "oui" ? "Oui" : "Non"}</li>
      </ul>

      <div className="border-t pt-4 space-y-1">
        <p>Chambre (base 75€/nuit) : {totals.chambre.toFixed(2)} €</p>
        <p>Petit-déjeuner : {totals.petitsDej.toFixed(2)} €</p>
        <p>Taxe de séjour : {totals.taxeSejour.toFixed(2)} €</p>
        <p>TVA : {totals.tva.toFixed(2)} €</p>
        <p className="font-bold">Total : {totals.total.toFixed(2)} €</p>
      </div>

      {!showPayment ? (
        <button
          type="button"
          onClick={() => setShowPayment(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Payer
        </button>
      ) : (
        <div className="border p-4 space-y-2 bg-gray-100">
          <h2 className="font-bold">Paiement sécurisé</h2>
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
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Confirmer le paiement
          </button>
          {bankStep === 1 && <p>Connexion à votre banque...</p>}
          {bankStep === 2 && (
            <p>
              Paiement validé. Le gérant doit encore valider la réservation. Un
              mail vous sera envoyé.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Order;
