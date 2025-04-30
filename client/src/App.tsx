import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Header from "./components/header";
import { FormProvider } from "./context/FormContext";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <FormProvider>
        <Header />

        <div className="flex-grow">
          <Outlet />
        </div>

        <Footer />
      </FormProvider>
    </LoginProvider>
  );
}

export default App;
