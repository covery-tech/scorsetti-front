import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { Icon } from "@iconify/react";
import ModalPortal from "../../../modal";
import useUser from "../../../../hooks/UseUser";
import img from "./img/favicon-32x32.png";

const OrdersTableAll = () => {
  const { user } = useUser();
  const [ordersData, setOrdersData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalDataPas, setModalDataPas] = useState(null);
  const [showModalPas, setShowModalPas] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cuantityPage, setCuantityPage] = useState(0);
  const [pasInfo, setPasInfo] = useState();
  const resultsPerPage = 7;
  const userId =
    user.type === "superadmin" ? "" : user.type === "admin" ? "" : user.id_user;
  const arrayNoVacio = cuantityPage
    ? Array(cuantityPage)
        .fill(null)
        .map((_, index) => index + 1)
    : [];

  const userAdmin = user.type === "admin" || user.type === "superadmin";

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URI_API}/product/getAllOrdersByPas/${userId}`,
        {
          params: {
            page: currentPage,
          },
        }
      )
      .then((response) => {
        let data = response.data;
        setCuantityPage(Math.ceil(data.pages / 7));
        setOrdersData(data.orders);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, resultsPerPage]);

  const handleOpenModal = (jsonData) => {
    setModalData(jsonData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModalPas = (idPas) => {
    getPas(idPas);
  };

  const handleCloseModalPas = () => {
    setShowModalPas(false);
  };

  const setOrders = () => {
    axios
      .get(
        `${process.env.REACT_APP_URI_API}/product/getAllOrdersByPas/${userId}`,
        {
          params: {
            page: currentPage,
          },
        }
      )
      .then((response) => {
        let data = response.data;
        setCuantityPage(Math.ceil(data.pages / 7));
        setOrdersData(data.orders);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const changeStatusOrder = (id, cotizated) => {
    axios
      .put(
        `${process.env.REACT_APP_URI_API}/product/updateCotiStatus/${id}/${cotizated}`
      )
      .then((response) => setOrders())
      .catch((error) => {
        console.error(error);
      });
  };

  const getPas = (idPas) => {
    axios
      .get(`${process.env.REACT_APP_URI_API}/user/getPasInfo/${idPas}`)
      .then((response) => {
        setPasInfo(response.data[0]);
        setModalDataPas(response.data[0]); // ToDo: configure modelDataPas
        setShowModalPas(true);
      })
      .catch((error) => console.error(error));
  };

  function formatColumnName(columnName) {
    return columnName
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="container table-data bg-light rounded-3 m-5 justify-content-center text-center mx-auto">
      {ordersData && ordersData.length > 0 ? (
        <div className="table-responsive responsive pt-3">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Nombre y Apellido</th>
                <th>Email</th>
                <th>Fecha</th>
                <th>Telefono</th>
                <th>Acción</th>
                <th>Cotizado</th>
                {user.type !== "password" ? <th>PAS</th> : <></>}
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order) => {
                return (
                  <tr key={order.id}>
                    <td data-label="Producto">{order.type}</td>
                    <td data-label="Nombre y Apellido">
                      {order.client === null &&
                      order?.name !== "null null" &&
                      order?.name !== "undefined undefined"
                        ? order?.name
                        : order.client?.nombre
                        ? `${order.client?.nombre} ${order.client?.apellido}`
                        : "anonimo"}
                    </td>
                    <td data-label="Email">
                      {order.email === null && order?.client === null
                        ? "Sin email"
                        : order.email === null
                        ? order?.client?.email
                        : order.email}
                    </td>
                    <td data-label="Fecha">{order.date}</td>
                    <td data-label="Telefono">
                      {order.phone_number === null && order?.client === null
                        ? "sin numero"
                        : order.phone_number === null
                        ? order?.client?.telefono
                        : order.phone_number}{" "}
                      <a href={`https://wa.me/${order.phone}`}>
                        <Icon icon="ri:whatsapp-line" />
                      </a>
                    </td>
                    {order.all_person ||
                    (order.description && order.all_person !== null) ||
                    order.description ? (
                      <td data-label="Acción">
                        {Array.isArray(order.all_person) ? ( // Verifica si es un array
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() =>
                              handleOpenModal(
                                order?.all_person || order?.description
                              )
                            }
                          >
                            Datos
                          </button>
                        ) : (
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() =>
                              handleOpenModal(
                                order.all_person || order.description
                              )
                            }
                          >
                            Datos
                          </button>
                        )}
                      </td>
                    ) : (
                      <td data-label="Acción">
                        <p>Sin Acción</p>
                      </td>
                    )}
                    <td data-label="Cotizado">
                      {userAdmin ? (
                        order?.cotizated === null ? (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                            }}
                          >
                            No se cotiza
                          </p>
                        ) : order?.cotizated === 0 ? (
                          <button
                            onClick={() =>
                              changeStatusOrder(order?.id, order.cotizated)
                            }
                            className="btn btn-sm btn-danger"
                          >
                            Sin cotizar
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              changeStatusOrder(order?.id, order.cotizated)
                            }
                            className="btn btn-sm btn-success"
                          >
                            Cotizado
                          </button>
                        )
                      ) : order?.cotizated === null ? (
                        <p
                          style={{
                            color: "red",
                            fontSize: "12px",
                          }}
                        >
                          No se cotiza
                        </p>
                      ) : order?.cotizated === 0 ? (
                        <b
                          style={{
                            color: "red",
                            fontSize: "12px",
                          }}
                        >
                          Sin cotizar
                        </b>
                      ) : (
                        <b
                          style={{
                            color: "green",
                            fontSize: "12px",
                          }}
                        >
                          Cotizado
                        </b>
                      )}
                    </td>
                    {userAdmin ? (
                      <td data-label="PAS">
                        {order.amount !== "undefined" ? (
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleOpenModalPas(order.amount)}
                          >
                            <Icon icon="el:eye-open" />
                          </button>
                        ) : (
                          <img src={img} alt="" />
                        )}
                      </td>
                    ) : (
                      <></>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}

      {showModal && (
        <ModalPortal onClose={handleCloseModal}>
          {modalData && Object.keys(modalData).length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  {Array.isArray(modalData) ? (
                    <tr>
                      {Object.keys(modalData[0]).map((key) => (
                        <th key={formatColumnName(key)}>
                          {formatColumnName(key)}
                        </th>
                      ))}
                    </tr>
                  ) : (
                    <tr>
                      {Object.keys(modalData).map((key) => (
                        <th key={formatColumnName(key)}>
                          {formatColumnName(key)}
                        </th>
                      ))}
                    </tr>
                  )}
                </thead>
                <tbody>
                  {Array.isArray(modalData) ? (
                    <>
                      {modalData.map((obj, i) => (
                        <tr key={i}>
                          {Object.values(obj).map((value, index) => (
                            <td key={index} data-label={i}>
                              {typeof value === "boolean"
                                ? value
                                  ? "Si"
                                  : "No"
                                : value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      {
                        <tr>
                          {Object.values(modalData).map((value, index) => (
                            <td key={index}>
                              {typeof value === "boolean"
                                ? value
                                  ? "Si"
                                  : "No"
                                : value}
                            </td>
                          ))}
                        </tr>
                      }
                    </>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <></>
          )}
        </ModalPortal>
      )}
      {showModalPas && (
        <ModalPortal onClose={handleCloseModalPas}>
          {modalDataPas && Object.keys(modalDataPas).length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Ruta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{modalDataPas.name}</td>
                    <td>{modalDataPas.last_name}</td>
                    <td>{modalDataPas.email}</td>
                    <td>{modalDataPas.phone_number}</td>
                    <td>{modalDataPas.route}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <></>
          )}
        </ModalPortal>
      )}
      <div className="pb-3">
        {currentPage === 1 ? (
          <button
            style={{
              color: "#0d6efd",
              padding: 3,
              cursor: "not-allowed",
              border: "none",
            }}
            disabled
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >{`⪡`}</button>
        ) : (
          <button
            style={{
              color: "#0d6efd",
              cursor: "pointer",
              padding: 3,
              border: "none",
            }}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >{`⪡`}</button>
        )}
        <strong
          style={{
            color: "#0d6efd",
            padding: 3,
            border: "solid 1px #0d6efd",
            margin: 10,
          }}
        >
          {currentPage}
        </strong>
        <strong
          style={{
            color: "#0d6efd",
            cursor: "pointer",
            padding: 3,
            border: "solid 1px #0d6efd",
            margin: 10,
          }}
          onClick={() => setCurrentPage(arrayNoVacio.length)}
        >
          {arrayNoVacio.length}
        </strong>
        {currentPage === arrayNoVacio.length ? (
          <button
            style={{
              color: "#0d6efd",
              padding: 3,
              cursor: "not-allowed",
              border: "none",
            }}
            disabled
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >{`⪢`}</button>
        ) : (
          <button
            style={{
              color: "#0d6efd",
              cursor: "pointer",
              padding: 3,
              border: "none",
            }}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >{`⪢`}</button>
        )}
      </div>
    </div>
  );
};

export default OrdersTableAll;
