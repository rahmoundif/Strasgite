import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import { useTranslation } from "../context/TranslationContext";
import EspacePerso from "../components/EspacePerso";

function EspaceVisiteur() {
  const { text_translation } = useTranslation();
  const navigate = useNavigate();

  const { isConnected, userRole } = useLogin();

  useEffect(() => {
    if (
      isConnected === true &&
      (userRole === "User" || userRole === "Europe")
    ) {
      navigate("/EspaceVisiteur");
    } else {
      navigate("/LogIn");
    }
  }, [isConnected, userRole, navigate]);

  return (
    <section>
      <h1>{text_translation("espace_visiteur_h1")}</h1>
      <EspacePerso />
    </section>
  );
}

export default EspaceVisiteur;
