import { Outlet } from "react-router";

import Footer from "./components/Footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
