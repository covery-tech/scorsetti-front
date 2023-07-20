import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserMenu } from "../UserConfig/UserMenu";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <Link to="/" className="navbar-brand">
            <img src="/logo-scorsetti.png" alt="#" />
            {/* logo mobile */}
          </Link>
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
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#quienes-somos" className="nav-link">
                ¿Quiénes somos?
              </a>
            </li>
            <li className="nav-item">
              <a href="/#contacto" className="nav-link">
                Contacto y Ubicación
              </a>
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
