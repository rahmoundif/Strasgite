import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EspacePerso from "../components/EspacePerso";
import { useLogin } from "../context/LoginContext";

function EspaceVisiteur() {
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
      <EspacePerso />
    </section>
  );
}

export default EspaceVisiteur;
