import React, { useState } from "react";
import useUser from "../../../../hooks/UseUser";
import ModalPortal from "../../../modal";

export const PasProductRow = ({ e, handleUpdateState, sendNotification }) => {
  const { user } = useUser();
  const [actionSureDisable, setActionSureDisable] = useState(false);
  const [actionSureEnable, setActionSureEnable] = useState(false);
  return (
    <>
      <tr>
        <td>{e.title}</td>
        <td>
          {e.status === "habilitado" ? (
            <>
              <button
                className="btn btn-success"
                onClick={() => {
                  setActionSureDisable(true);
                  // handleUpdateState(e.name,"pendiente deshabilitado")
                  // sendNotification(`${user.name},${user.last_name} desea acutalizar el estado de su producto ${e.name} a deshabilitado`)
                }}
              >
                {e.status}
              </button>
              <strong>
                click en el boton si quiere poner este producto en pendiente por
                deshabilitar
              </strong>
            </>
          ) : e.status === "pendiente deshabilitado" ? (
            <>
              <button
                className="btn btn-warning"
                onClick={() => handleUpdateState(e.name, "habilitado")}
              >
                {e.status}
              </button>
              <strong>click para cambiar cancelar esta solicitud</strong>
            </>
          ) : e.status === "pendiente habilitado" ? (
            <>
              <button
                className="btn btn-warning"
                onClick={() => handleUpdateState(e.name, "deshabilitado")}
              >
                {e.status}
              </button>
              <strong>click para cambiar cancelar esta solicitud</strong>
            </>
          ) : (
            <>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setActionSureEnable(true);
                  // handleUpdateState(e.name,"pendiente habilitado")
                  // sendNotification(`${user.name},${user.last_name} desea acutalizar el estado de su producto ${e.name} a habilitado`)
                }}
              >
                {e.status}
              </button>
              <strong>
                click en el boton si quiere poner este producto en pendiente por
                habilitar
              </strong>
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
                  `${user.name},${user.last_name} desea acutalizar el estado de su producto ${e.name} a deshabilitado`
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
                  `${user.name},${user.last_name} desea acutalizar el estado de su producto ${e.name} a habilitado`
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
