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
        <div className="w-100">
          <span className="w-50 pa2 pointer" onClick={() => navigate("/scorsetti/panel")}>
            <FontAwesomeIcon style={{height: "1.25rem", color: "var(--color-first-medium)"}} icon={faGear} />
          </span>
          <span className="w-50 pa2 pointer" onClick={logout}>
            <FontAwesomeIcon style={{height: "1.25rem", color: "var(--color-first-medium)"}} icon={faArrowRightFromBracket} />
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
