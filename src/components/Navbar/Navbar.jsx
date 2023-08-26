import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserMenu } from "../UserConfig/UserMenu";
import useUser from "../hooks/UseUser";

export default function Navbar() {
  const { pas } = useUser();

  return (
    <nav className="navbar justify-between bg-white flex pv2 ph2 mb5">
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
              Inicio
            </Link>
          ) : (
            <Link to={`/${pas.route}`} className="nav-link active">
              Inicio
            </Link>
          )}
        </span>
        <span className="nav-item">
          {!pas?.route?.length ? (
            <a href="/#quienes-somos" className="nav-link">
              ¿Quiénes somos?
            </a>
          ) : (
            <a href={`/${pas.route}/#quienes-somos`} className="nav-link">
              ¿Quiénes somos?
            </a>
          )}
        </span>
        <span className="nav-item">
          {!pas?.route?.length ? (
            <a href="/#contacto" className="nav-link">
              Contacto y Ubicación
            </a>
          ) : (
            <a href={`/${pas.route}/#contacto`} className="nav-link">
              Contacto y Ubicación
            </a>
          )}
        </span>
        <span className="nav-item desk-item">
          <UserMenu />
        </span>
      </div>
    </nav>
  );
}
