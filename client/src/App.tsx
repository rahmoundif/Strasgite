import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/header";
import { CalendarProvider } from "./context/CalendarContext";
import { FormProvider } from "./context/FormContext";
import { LoginProvider } from "./context/LoginContext";
import { RoomsProvider } from "./context/RoomsContext";
import { TranslationProvider } from "./context/TranslationContext";

function App() {
  return (
    <TranslationProvider>
      <FormProvider>
        <LoginProvider>
          <CalendarProvider>
            <RoomsProvider>
              <Header />

              <div className="flex-grow">
                <Outlet />
              </div>

              <Footer />
            </RoomsProvider>
          </CalendarProvider>
        </LoginProvider>
      </FormProvider>
    </TranslationProvider>
  );
}

export default App;
