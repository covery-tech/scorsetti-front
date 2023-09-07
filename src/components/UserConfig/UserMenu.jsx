// import React from 'react'
import { Link } from "react-router-dom";
import useUser from "../../hooks/UseUser";
import "./UserMenu.css";
import { Icon } from "@iconify/react";

export const UserMenu = () => {
  const { isLoggedIn, logout, user } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <button
            className="btn btn-secondary dropdown-toggle"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Opciones
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end list-drop "
            aria-labelledby="dropdownMenuLink"
          >
            
            <li>
              {user?.type === "admin" ||
              user?.type === "superadmin" ||
              user.type === "pas" ? (
                <div className="nav-item dropdown">
                  <Link to="/scorsetti/panel-admin" className="dropdown-item">
                    <Icon icon="vscode-icons:file-type-light-config" />
                    <span> Panel de admin</span>
                  </Link>
                </div>
              ) : user.type === "client" ? (
                <div className="nav-item dropdown">
                  <Link to="/scorsetti/panel-admin" className="dropdown-item">
                    <Icon icon="vscode-icons:file-type-light-config" />
                    <span> Panel </span>
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </li>
            <Link className="dropdown-item" to="#" onClick={logout}>
              <i className="fa fa-user-o me-2"></i>
              Cerrar sesión
            </Link>
          </ul>
        </>
      ) : (
        <>
          <Link
            className="dropdown-item text-white"
            to="/ingresar"
            style={{
              backgroundColor: "#388dfc",
              padding: "0.5rem",
            }}
          >
            <i className="fa fa-user-o"></i>
            <span> ACCEDER</span>
          </Link>
        </>
      )}
    </div>
  );
};
