import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserMenu } from "../UserConfig/UserMenu";
import useUser from "../../hooks/UseUser";
import { faHome, faLocationDot, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const { pas } = useUser();

  return (
    <nav className="navbar justify-between bg-white flex pv2 ph2">
      <div className="w-30-l w-10 logo-desktop">
        {!pas?.route?.length ? (
          <Link to="/" className="navbar-brand">
            <img src="/logo-scorsetti.png" alt="#" />
            {/* logo mobile */}
          </Link>
        ) : (
          <Link to={`/${pas.route}`} className="navbar-brand">
            <img src="/logo-scorsetti.png" alt="#" />
            {/* logo mobile */}
          </Link>
        )}
      </div>
      <div className="w-30-l w-10 logo-mobile">
        {!pas ? (
          <Link to="/">
            <img src="/logo-scorsetti-mobile.png" alt="#" />
            {/* logo mobile */}
          </Link>
        ) : (
          <Link to={`/usuario_pas/${pas.id}`}>
            <img src="/logo-scorsetti-mobile.png" alt="#" />
            {/* logo mobile */}
          </Link>
        )}
      </div>
      <div className="flex w-70-l w-90 justify-around items-center">
        <span className="nav-item">
          {!pas?.route?.length ? (
            <Link to="/" className="nav-link active">
              <span className="logo-desktop">Inicio</span>
              <FontAwesomeIcon className="logo-mobile pb1 h1-25rem" icon={faHome} />
            </Link>
          ) : (
            <Link to={`/${pas.route}`} className="nav-link active">
              <span className="logo-desktop">Inicio</span>
              <FontAwesomeIcon className="logo-mobile pb1 h1-25rem" icon={faHome} />
            </Link>
          )}
        </span>
        <span className="nav-item">
          {!pas?.route?.length ? (
            <a href="/#quienes-somos" className="nav-link">
              <span className="logo-desktop">¿Quiénes somos?</span>
              <FontAwesomeIcon className="logo-mobile pb1 h1-25rem" icon={faUsers} />
            </a>
          ) : (
            <a href={`/${pas.route}/#quienes-somos`} className="nav-link">
              <span className="logo-desktop">¿Quiénes somos?</span>
              <FontAwesomeIcon className="logo-mobile pb1 h1-25rem" icon={faUsers} />
            </a>
          )}
        </span>
        <span className="nav-item">
          {!pas?.route?.length ? (
            <a href="/#contacto" className="nav-link">
              <span className="logo-desktop">Contacto y Ubicación</span>
              <FontAwesomeIcon className="logo-mobile pb1 h1-25rem" icon={faLocationDot} />
            </a>
          ) : (
            <a href={`/${pas.route}/#contacto`} className="nav-link">
              <span className="logo-desktop">Contacto y Ubicación</span>
              <FontAwesomeIcon className="logo-mobile pb1 h1-25rem" icon={faLocationDot} />
            </a>
          )}
        </span>
        <span className="nav-item w-30 w-25-ns">
          <UserMenu />
        </span>
      </div>
    </nav>
  );
}
