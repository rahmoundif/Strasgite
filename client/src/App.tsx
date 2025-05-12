import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/header";
import { CalendarProvider } from "./context/CalendarContext";
import { FormProvider } from "./context/FormContext";
import { LoginProvider } from "./context/LoginContext";
import { RoomsProvider } from "./context/RoomsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { TranslationProvider } from "./context/TranslationContext";

function App() {
  return (
    <TranslationProvider>
      <LoginProvider>
        <FormProvider>
          <ThemeProvider>
            <CalendarProvider>
              <RoomsProvider>
                <div className="flex flex-col min-h-screen">
                  <Header />

                  <div className="flex-grow">
                    <Outlet />
                  </div>

                  <div className="pt-8">
                    <Footer />
                  </div>
                </div>
              </RoomsProvider>
            </CalendarProvider>
          </ThemeProvider>
        </FormProvider>
      </LoginProvider>
    </TranslationProvider>
  );
}

export default App;
