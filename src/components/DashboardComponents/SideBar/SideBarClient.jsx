import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShop,
  faBell,
  faArrowRightFromBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import useUser from "../../../hooks/UseUser";
export const SideBarClient = ({ logout, updateSite }) => {
  const { jwt } = useUser();
  const [notis, setNotis] = useState(0);
  useEffect(() => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/getCountNotisPas`,
      headers: { token: jwt },
    };
    axios(config).then((res) => {
      //(res.data);
      setNotis(res.data[0]["COUNT(*)"]);
    });
  }, []);
  return (
    <>
      <ul>
        <p className="centerP">Listas</p>
        <li onClick={() => updateSite("compras")} className='flex'>
          <FontAwesomeIcon icon={faCartShopping} />
          <div className='text'>Mis órdenes</div>
        </li>
        <p className="centerP">Útil</p>
        <li
          onClick={() => updateSite("notificaciones")}
          className='flex relative'
        >
          {notis ? (
            <div
              style={{
                backgroundColor: "#dc3545",
                height: "12px",
                minWidth: 10,
                position: "absolute",
                borderRadius: "100%",
                left: "12px",
                fontSize: 10,
                top: "4px",
                textAlign: "center",
              }}
            >
              {notis < 10 ? notis : "+10"}
            </div>
          ) : (
            <></>
          )}
          <FontAwesomeIcon icon={faBell} />
          <div className='text'>Notificaciones</div>
        </li>
        <p className="centerP">Usuario</p>

        <li
          onClick={() => updateSite("profile")}
          className='flex relative'
        >
          <FontAwesomeIcon icon={faCircleUser} />
          <div className='text'>Perfil</div>
        </li>
        <li onClick={logout} className='flex-l dn'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <div>Cerrar Sesión</div>
        </li>
      </ul>
    </>
  );
};
