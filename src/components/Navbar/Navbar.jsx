import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserMenu } from "../UserConfig/UserMenu";
import useUser from "../hooks/UseUser";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pas } = useUser();
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar justify-between bg-white flex pv2 ph2 mb5">
      <div className="w-30-l w-10 logo-desktop">
        {!pas ? (
          <Link to="/">
            <img src="/logo-scorsetti.png" alt="#" />
            {/* logo mobile */}
          </Link>
        ) : (
          <Link to={`/usuario_pas/${pas.id}`}>
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
          {!pas ? (
            <Link to="/" className="nav-link active">
              Inicio
            </Link>
          ) : (
            <Link to={`/usuario_pas/${pas.id}`} className="nav-link active">
              Inicio
            </Link>
          )}
        </span>
        <span className="nav-item">
          {!pas ? (
            <a href="/#quienes-somos" className="nav-link">
              ¿Quiénes somos?
            </a>
          ) : (
            <a
              href={`/usuario_pas/${pas.id}/#quienes-somos`}
              className="nav-link"
            >
              ¿Quiénes somos?
            </a>
          )}
        </span>
        <span className="nav-item">
          {!pas ? (
            <a href="/#contacto" className="nav-link">
              Contacto y Ubicación
            </a>
          ) : (
            <a href={`/usuario_pas/${pas.id}/#contacto`} className="nav-link">
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
