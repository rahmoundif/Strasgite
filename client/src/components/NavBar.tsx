import { Link } from "react-router";

function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link to="/Accueil">Accueil</Link>
        </li>
        <li>
          <Link to="/Nos_Chambres"> Nos chambres </Link>
        </li>
        <li>
          <Link to="/Services"> Services </Link>
        </li>
        <li>
          <Link to="/Notre_Alsace"> Notre Alsace </Link>
        </li>
        <li>
          <Link to="/Reservation"> Reservation </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
