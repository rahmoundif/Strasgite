
import { Outlet } from "react-router";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>

      <main className="flex-grow text-center">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;
