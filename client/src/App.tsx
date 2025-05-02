import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/header";
import { CalendarProvider } from "./context/CalendarContext";
import { FormProvider } from "./context/FormContext";
import { LoginProvider } from "./context/LoginContext";
import { RoomsProvider } from "./context/RoomsContext";

function App() {
  return (
    <LoginProvider>
      <FormProvider>
        <CalendarProvider>
          <RoomsProvider>
            <Header />

            <div className="flex-grow">
              <Outlet />
            </div>

            <Footer />
          </RoomsProvider>
        </CalendarProvider>
      </FormProvider>
    </LoginProvider>
  );
}

export default App;
