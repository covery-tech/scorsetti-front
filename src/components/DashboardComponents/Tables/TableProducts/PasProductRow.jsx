import React, { useState } from "react";
import useUser from "../../../../hooks/UseUser";
import ModalPortal from "../../../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faClock } from "@fortawesome/free-solid-svg-icons";

export const PasProductRow = ({ e, handleUpdateState, sendNotification }) => {
  const { user } = useUser();
  const [actionSureDisable, setActionSureDisable] = useState(false);
  const [actionSureEnable, setActionSureEnable] = useState(false);
  return (
    <>
      <tr>
        <th className="w-20" scope="col">{e.title}</th>
        <td className="tc w-20">
                {
                  e.status === "habilitado" ? 
                  (<strong className="green">Habilitado <FontAwesomeIcon icon={faCircleCheck}/></strong>) :
                  e.status === "pendiente deshabilitado" ? 
                  (<strong className="yellow">Pendiente deshabilitado <FontAwesomeIcon icon={faClock}/></strong>):
                  e.status === "pendiente habilitado" ? 
                  (<strong className="yellow">Pendiente habilitado <FontAwesomeIcon icon={faClock}/></strong>):
                  (<strong className="red">Deshabilitado <FontAwesomeIcon icon={faCircleXmark}/></strong>)
                }
                </td>
        <td className="tc w-60">
          {e.status === "habilitado" ? (
            <>
              <button
                className="btn main-button w-80"
                onClick={() => {
                  setActionSureDisable(true);
                  handleUpdateState(e.name,"pendiente deshabilitado")
                  sendNotification(`${user.name},${user.last_name} desea acutalizar el estado de su producto ${e.name} a deshabilitado`)
                }}
              >
                Solicitar deshabilitación
              </button>
            </>
          ) : e.status === "pendiente deshabilitado" ? (
            <>
              <button
                className="btn main-button w-80"
                onClick={() => handleUpdateState(e.name, "habilitado")}
              >
                Cancelar solicitud
              </button>
            </>
          ) : e.status === "pendiente habilitado" ? (
            <>
              <button
                className="btn main-button w-80"
                onClick={() => handleUpdateState(e.name, "deshabilitado")}
              >
                Cancelar solicitud
              </button>
            </>
          ) : (
            <>
              <button
                className="btn main-button w-80"
                onClick={() => {
                  setActionSureEnable(true);
                  handleUpdateState(e.name,"pendiente habilitado")
                  sendNotification(`${user.name},${user.last_name} desea actualizar el estado de su producto ${e.name} a habilitado`)
                }}
              >
                Solicitar habilitación
              </button>
            </>
          )}
        </td>
      </tr>
      {actionSureDisable && (
        <ModalPortal onClose={setActionSureDisable}>
          <div>
            <h4>
              esta seguro que quiere enviar una solicitud deshabilitar el
              producto {e.name}?
            </h4>
            <button
              onClick={() => {
                handleUpdateState(e.name, "pendiente deshabilitado");
                sendNotification(
                  `${user.name},${user.last_name} desea actualizar el estado de su producto ${e.name} a deshabilitado`
                );
                setActionSureDisable(false);
              }}
            >
              si
            </button>
            <button onClick={() => setActionSureDisable(false)}>no</button>
          </div>
        </ModalPortal>
      )}
      {actionSureEnable && (
        <ModalPortal onClose={setActionSureEnable}>
          <div>
            <h4>
              esta seguro que quiere enviar una solicitud habilitar el producto{" "}
              {e.name}?
            </h4>
            <button
              onClick={() => {
                handleUpdateState(e.name, "pendiente habilitado");
                sendNotification(
                  `${user.name},${user.last_name} desea actualizar el estado de su producto ${e.name} a habilitado`
                );
                setActionSureEnable(false);
              }}
            >
              si
            </button>
            <button onClick={() => setActionSureEnable(false)}>no</button>
          </div>
        </ModalPortal>
      )}
    </>
  );
};
