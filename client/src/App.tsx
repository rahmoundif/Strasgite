import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/header";
import { CalendarProvider } from "./context/CalendarContext";
import { FormProvider } from "./context/FormContext";
import { LoginProvider } from "./context/LoginContext";
import { ThemeProvider } from "./context/ThemeContext";
import { RoomsProvider } from "./context/RoomsContext";


function App() {
  return (
    <LoginProvider>
      <FormProvider>

        <ThemeProvider>
          <div className="flex flex-col min-h-screen">

        <CalendarProvider>
          <RoomsProvider>
            <Header />

            <div className="flex-grow">
              <Outlet />
            </div>

            <div className="pt-8">
              <Footer />
            </div>
          </div>
        </ThemeProvider>


            <Footer />
          </RoomsProvider>
        </CalendarProvider>
      </FormProvider>
    </LoginProvider>
  );
}

export default App;
