import React, { useEffect, useState } from "react";
import axios from "axios";
import "../table.css";
import { Icon } from "@iconify/react";
import ModalPortal from "../../../modal";
import useUser from "../../../../hooks/UseUser";
import img from "./img/favicon-32x32.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleCheck,
  faCircleXmark,
  faClock,
  faEye,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import StyledText from "../../../StyledText/StyledText";

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
    <>
      <div className="w-100 h-90 pre">
        {ordersData && ordersData.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Nombre y Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Fecha</th>
                <th scope="col">Telefono</th>
                <th scope="col">Datos de órden</th>
                <th scope="col">Acción</th>
                <th scope="col">Estado</th>
                {user.type !== "password" ? <th scope="col">PAS</th> : <></>}
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
                      <p
                        style={{
                          justifyContent: "flex-start",
                        }}
                      >
                        <a
                          href={`https://wa.me/${order.phone}`}
                          style={{
                            color: "var(--color-first-medium-light)",
                          }}
                        >
                          {order.phone_number === null && order?.client === null
                            ? "sin numero"
                            : order.phone_number === null
                            ? order?.client?.telefono
                            : order.phone_number}{" "}
                          <Icon icon="ri:whatsapp-line" />
                        </a>
                      </p>
                    </td>
                    {order.all_person ||
                    (order.description && order.all_person !== null) ||
                    order.description ? (
                      <td data-label="Datos de órden">
                        {Array.isArray(order.all_person) ? ( // Verifica si es un array
                          <button
                            className="button button-nohover"
                            style={{ color: "var(--color-first-medium-light" }}
                            onClick={() =>
                              handleOpenModal(
                                order?.all_person || order?.description
                              )
                            }
                          >
                            <span className="ph1">Ver</span>
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                        ) : (
                          <button
                            className="button button-nohover"
                            style={{ color: "var(--color-first-medium-light" }}
                            onClick={() =>
                              handleOpenModal(
                                order.all_person || order.description
                              )
                            }
                          >
                            <span className="ph1">Ver</span>
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                        )}
                      </td>
                    ) : (
                      <td data-label="Datos de órden">
                        <p>Sin Acción</p>
                      </td>
                    )}
                    <td data-label="Acción">
                      <button
                        onClick={() =>
                          changeStatusOrder(order?.id, order.cotizated)
                        }
                        className="button main-button"
                        disabled={!userAdmin || order?.cotizated === null}
                      >
                        Cambiar estado
                      </button>
                    </td>
                    <td data-label="Estado">
                      {order?.cotizated === null ? (
                        <strong className="red">
                          No se cotiza <FontAwesomeIcon icon={faCircleXmark} />
                        </strong>
                      ) : order?.cotizated === 0 ? (
                        <strong className="yellow">
                          Sin cotizar <FontAwesomeIcon icon={faClock} />
                        </strong>
                      ) : (
                        <strong className="green">
                          Cotizado <FontAwesomeIcon icon={faCircleCheck} />
                        </strong>
                      )}
                    </td>
                    {userAdmin ? (
                      <td data-label="PAS">
                        {order.amount !== "undefined" ? (
                          <button
                            className="button button-nohover"
                            style={{ color: "var(--color-first-medium-light" }}
                            onClick={() => handleOpenModalPas(order.amount)}
                          >
                            <span className="ph1">Ver</span>
                            <FontAwesomeIcon icon={faEye} />
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
        ) : (
          <>
            <div className="flex justify-center">
              <strong className="empty">
                Aún no tienes órdenes.
              </strong>
            </div>
          </>
        )}

        {showModal && (
          <ModalPortal onClose={handleCloseModal}>
            {modalData && Object.keys(modalData).length > 0 ? (
              <div className="w-100 h-90 pre">
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
              <div className="w-100 h-90 pre">
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
      </div>
      <div className="flex justify-center items-center pb2 w-100">
        <button
          className="button main-button mh3"
          style={{ padding: "0.2rem", height: "50%" }}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <p className="current-page">{currentPage}</p>
        <p
          className="last-page"
          onClick={() => setCurrentPage(arrayNoVacio.length)}
        >
          {arrayNoVacio.length}
        </p>
        <button
          className="button main-button mh3"
          style={{ padding: "0.2rem", height: "50%" }}
          disabled={currentPage === arrayNoVacio.length}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <style jsx>{`
        .h-90 {
          height: 90%;
        }
      `}</style>
    </>
  );
};

export default OrdersTableAll;
