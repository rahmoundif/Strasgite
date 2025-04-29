import { Outlet } from "react-router";

import Footer from "./components/Footer";
import { LoginProvider } from "./components/context/LoginContext";
import Header from "./components/header";

function App() {
  return (
    <LoginProvider>
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </LoginProvider>
  );
}

export default App;
