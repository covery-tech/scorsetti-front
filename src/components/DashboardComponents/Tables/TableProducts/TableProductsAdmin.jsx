import React from "react";
import useUser from "../../../../hooks/UseUser";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const TableProductsAdmin = ({ products, handleUpdateState }) => {
  const { user, jwt } = useUser();
  const { userId } = useParams();
  let sendNotification;
  if (userId) {
    sendNotification = (description) => {
      const config = {
        method: "post",
        baseURL: `${process.env.REACT_APP_URI_API}/product/emitNotificationAdmin`,
        headers: { token: jwt },
        data: {
          idAdmin: user.id_user,
          description,
          idPas: userId,
        },
      };
      axios(config);
    };
  } else {
    sendNotification = (description) => {};
  }

  return (
    <>
      <div className="w-100 h-100 pre">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre del producto</th>
              <th scope="col">Estado</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i}>
                <th className="w-60" scope="row">
                  {product.title}
                </th>
                <td className="tc w-20">
                  {product.status === "habilitado" ? (
                    <strong className="green">
                      Habilitado <FontAwesomeIcon icon={faCircleCheck} />
                    </strong>
                  ) : product.status === "pendiente deshabilitado" ? (
                    <strong className="yellow">
                      Pendiente deshabilitado <FontAwesomeIcon icon={faClock} />
                    </strong>
                  ) : product.status === "pendiente habilitado" ? (
                    <strong className="yellow">
                      Pendiente habilitado <FontAwesomeIcon icon={faClock} />
                    </strong>
                  ) : (
                    <strong className="red">
                      Deshabilitado <FontAwesomeIcon icon={faCircleXmark} />
                    </strong>
                  )}
                </td>
                <td className="tc w-20">
                  {product.status === "habilitado" ||
                  product.status === "pendiente deshabilitado" ? (
                    <>
                      <button
                        className="btn main-button w-80"
                        onClick={() => {
                          handleUpdateState(product.name, "deshabilitado");
                          sendNotification(
                            `estado de solicitud de para venta de polizas tipo ${product.name} a deshabilitado`
                          );
                        }}
                      >
                        Cambiar estado a deshabilitado
                      </button>
                    </>
                  ) : product.status === "deshabilitado" ||
                    product.status === "pendiente habilitado" ? (
                    <>
                      <button
                        className="btn main-button w-80"
                        onClick={() => {
                          handleUpdateState(product.name, "habilitado");
                          sendNotification(
                            `estado de solicitud de para venta de polizas tipo ${product.name} a habilitado`
                          );
                        }}
                      >
                        Cambiar estado a habilitado
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
