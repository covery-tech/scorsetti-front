import "./Navbar.css";
import { Link, useParams } from "react-router-dom";
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
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          {
            !pas?.route?.length  ? 
            <Link  to="/" className="navbar-brand">
              <img src="/logo-scorsetti.png" alt="#" />
              {/* logo mobile */}
            </Link>
            :
            <Link  to={`/${pas.route}`} className="navbar-brand">
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
              !pas?.route?.length ?
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            : <Link to={`/${pas.route}`}className="nav-link active">
                Inicio
              </Link>
            } 
            </li>
            <li className="nav-item">
            {
              !pas?.route?.length ?
              <a href="/#quienes-somos" className="nav-link">
                ¿Quiénes somos?
              </a>
              :
              <a href={`/${pas.route}/#quienes-somos`} className="nav-link">
                ¿Quiénes somos?
              </a>
            }
            </li>
            <li className="nav-item">
            {
              !pas?.route?.length ?
              <a href="/#contacto" className="nav-link">
                Contacto y Ubicación
              </a>
              :
              <a href={`/${pas.route}/#contacto`} className="nav-link">
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
