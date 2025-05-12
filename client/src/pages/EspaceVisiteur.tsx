import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import { useTranslation } from "../context/TranslationContext";

function EspaceVisiteur() {
  const { text_translation } = useTranslation();
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
      <h1>{text_translation("espace_visiteur_h1")}</h1>
    </section>
  );
}

export default EspaceVisiteur;
