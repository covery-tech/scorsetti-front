import "./Navbar.css";
import logo from "./logo.png";
import useUser from "../hooks/UseUser";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { UserMenu } from "../UserConfig/UserMenu";

export default function Navbar() {
  const { isLoggedIn, logout } = useUser();
  const { user } = useUser();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { userId } = useParams();
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header-area header-sticky shadow-sm">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand logo">
                <embed src={logo} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleNavToggle}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isNavOpen ? "show" : ""
                }`}
                id="navbarNav"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
                  <li className="nav-item">
                    <Link to={userId ? `/usuario_pas/${userId}/` : "/"} className="nav-link active">
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href={userId ? `/usuario_pas/${userId}/#who-are-we` : "/#who-are-we"} className="nav-link">
                      ¿Quiénes somos?
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href={userId ? `/usuario_pas/${userId}/#contact-section` : "/#contact-section"} className="nav-link">
                      Contacto y ubicación
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href={userId ? `/usuario_pas/${userId}/#help-section` : "/#help-section"} className="nav-link">
                      ¿Cómo contratar un seguro?
                    </a>
                  </li>
                  
                  <li>
                    {isLoggedIn ? (
                      <a
                        className="nav-item mobile-item"
                        href="#"
                        onClick={logout}
                      >
                        <i className="fa fa-user-o me-2"></i>
                        Cerrar sesión
                      </a>
                    ) : (
                      <Link className="nav-item mobile-item" to="/ingresar">
                        <i className="fa fa-user-o"></i>
                        <span> ACCEDER</span>
                      </Link>
                    )}
                  </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                  {user?.type === "admin" || user?.type === "superadmin" ? (
                    <li className="nav-item dropdown">
                      <Link to="/libra/panel-admin" className="nav-link">
                        <Icon icon="vscode-icons:file-type-light-config" />
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li className="nav-item">
                    <UserMenu />
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
