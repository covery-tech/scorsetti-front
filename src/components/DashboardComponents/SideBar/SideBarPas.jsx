import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBell,
  faArrowRightFromBracket,
  faCartShopping,
  faBagShopping,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import useUser from "../../../hooks/UseUser";
export const SideBarPas = ({ logout, updateSite }) => {
  const [select, setSelect] = useState("profile");
  const Selected = (valor) => {
    setSelect(valor);
  };
  const { jwt } = useUser();
  const [notis, setNotis] = useState(0);
  useEffect(() => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/getCountNotisPas`,
      headers: { token: jwt },
    };
    axios(config).then((res) => {
      //(res.data)
      setNotis(res.data[0]["COUNT(*)"]);
    });
  }, []);
  return (
    <>
      <ul>
        <p className="centerP">Listas</p>
        <li onClick={() => { updateSite("clientes"); Selected("clientes") }} className="flex">
          {select == "clientes" ?
            <div className="selected w-100">
              <FontAwesomeIcon icon={faUser} className="pl1" />
              Clientes
            </div>
            :
            <div className="text">
              <FontAwesomeIcon icon={faUser} />
              Clientes
            </div>}
        </li>
        <li onClick={() => { updateSite("productos"); Selected("productos") }} className="flex">
          {select == "productos" ?
            <div className="selected w-100">
              <FontAwesomeIcon icon={faBagShopping} className="pl1" />
              Mis productos
            </div>
            :
            <div className="text">
              <FontAwesomeIcon icon={faBagShopping} />
              Mis productos
            </div>}
        </li>
        <li onClick={() => { updateSite("ordenes"); Selected("ordenes") }} className="flex">
          {select == "ordenes" ?
            <div className="selected w-100">
              <FontAwesomeIcon icon={faCartShopping} className="pl1" />
              Órdenes
            </div>
            :
            <div className="text">
              <FontAwesomeIcon icon={faCartShopping} />
              Órdenes
            </div>}
        </li>
        <p className="centerP">Útil</p>
        <li
          onClick={() => { updateSite("notificaciones"); Selected("notificaciones") }}
          className="flex relative"
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
          {select == "notificaciones" ?
            <div className="selected w-100">
              <FontAwesomeIcon icon={faBell} className="pl1" />
              Notificaciones
            </div>
            :
            <div className="text">
              <FontAwesomeIcon icon={faBell} />
              Notificaciones
            </div>}
        </li>
        <li className="flex" onClick={() => { updateSite("panel"); Selected("panel") }}>
          {select == "panel" ?
            <div className="selected w-100">
              <FontAwesomeIcon icon={faChartSimple} className="pl1" />
              Estadísticas
            </div>
            :
            <div className="text">
              <FontAwesomeIcon icon={faChartSimple} />
              Estadísticas
            </div>}
        </li>
        <p className="centerP">Usuario</p>
        <li onClick={() => { updateSite("profile"); Selected("profile") }} className="flex">
          {select == "profile" ?
            <div className="selected w-100">
              <FontAwesomeIcon icon={faCircleUser} className="pl1" />
              Perfil
            </div>
            :
            <div className="text">
              <FontAwesomeIcon icon={faCircleUser} />
              Perfil
            </div>}
        </li>
        <li onClick={logout} className="flex-l dn">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <div>Cerrar Sesión</div>
        </li>
      </ul>
    </>
  );
};
