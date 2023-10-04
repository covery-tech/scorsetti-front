// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUser from "../../hooks/UseUser";
import { useNavigate } from "react-router-dom";
import {
  faArrowRightFromBracket,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export const UserMenu = () => {
  const { isLoggedIn, logout } = useUser();
  const navigate = useNavigate();

  return (
    <>
      {isLoggedIn ? (
        <div className="flex justify-between justify-end-l">
          <span className="pa2 pointer" onClick={() => navigate("/scorsetti/panel")}>
            <FontAwesomeIcon className="h1-25rem" style={{color: "var(--color-first-medium)"}} icon={faGear} />
          </span>
          <span className="pa2 pointer" onClick={logout}>
            <FontAwesomeIcon className="h1-25rem" style={{color: "var(--color-first-medium)"}} icon={faArrowRightFromBracket} />
          </span>
        </div>
      ) : (
        <div className="w-100">
          <button
            className="button main-button"
            onClick={() =>
              navigate("/ingresar")
            }
          >
            <b>Acceder</b>
          </button>
        </div>
      )}
    </>
  );
};
