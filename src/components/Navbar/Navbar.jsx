import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserMenu } from "../UserConfig/UserMenu";
import useUser from "../hooks/UseUser";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {pas} = useUser()
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          {
            !pas ? 
            <Link  to="/" className="navbar-brand">
              <img src="/logo-scorsetti.png" alt="#" />
              {/* logo mobile */}
            </Link>
            :
            <Link  to={`/usuario_pas/${pas.id}`} className="navbar-brand">
              <img src="/logo-scorsetti.png" alt="#" />
              {/* logo mobile */}
            </Link>
          }
        </div>
        <div className="d-flex">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="mobile-item">
            <UserMenu />
          </span>
        </div>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto mb-lg-0 p-2">
            <li className="nav-item">
            {
              !pas ?
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            : <Link to={`/usuario_pas/${pas.id}`}className="nav-link active">
                Inicio
              </Link>
            } 
            </li>
            <li className="nav-item">
            {
              !pas ?
              <a href="/#quienes-somos" className="nav-link">
                ¿Quiénes somos?
              </a>
              :
              <a href={`/usuario_pas/${pas.id}/#quienes-somos`} className="nav-link">
                ¿Quiénes somos?
              </a>
            }
            </li>
            <li className="nav-item">
            {
              !pas ?
              <a href="/#contacto" className="nav-link">
                Contacto y Ubicación
              </a>
              :
              <a href={`/usuario_pas/${pas.id}/#contacto`} className="nav-link">
              Contacto y Ubicación
              </a>
            }
            </li>
            <li className="nav-item desk-item">
              <UserMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
