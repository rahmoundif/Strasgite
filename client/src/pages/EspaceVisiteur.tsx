import { useNavigate } from "react-router-dom";
import { useLogin } from "../components/context/LoginContext";

function EspaceVisiteur() {
  const navigate = useNavigate();

  const { isConnected } = useLogin();
  console.log(isConnected);

  if (isConnected === false) {
    navigate("/LogIn");
  } else {
    navigate("/EspaceVisiteur");
  }

  return (
    <section>
      <h1>Réservations précédentes :</h1>
    </section>
  );
}

export default EspaceVisiteur;
