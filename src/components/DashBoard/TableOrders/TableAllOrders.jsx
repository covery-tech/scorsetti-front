import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { Icon } from "@iconify/react";
import ModalPortal from "../../modal";
import useUser from "../../hooks/UseUser";

const OrdersTableAll = () => {
    const {user} = useUser()
    const [ordersData, setOrdersData] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cuantityPage, setCuantityPage] = useState(0);
    const resultsPerPage = 7;
    const userId = (user.type === "superadmin") ? "covery" : (user.type === "admin") ? "covery" : user.id;
    const arrayNoVacio = cuantityPage
    ? Array(cuantityPage)
        .fill(null)
        .map((_, index) => index + 1)
    : [];


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


    return (
        <div className="container bg-light rounded-3 m-5 justify-content-center text-center mx-auto">
            {ordersData && ordersData.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Nombre y Apellido</th>
                            <th>Email</th>
                            <th>Fecha</th>
                            <th>Telefono</th>
                            <th>Acción</th>
                            <th>Cotizado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.type}</td>
                                    <td>
                                        {(order.client === null && order?.name !== "null null" && order?.name !== "undefined undefined") ? order?.name : order.client?.nombre ? `${order.client?.nombre} ${order.client?.apellido}` : "anonimo"}
                                    </td>
                                    <td>
                                         {(order.email === null && order?.client === null) ? "Sin email" : order.email === null ? order?.client?.email : order.email}
                                    </td>
                                    <td>{order.date}</td>
                                    <td>
                                        {(order.phone_number === null && order?.client === null) ? "sin numero" : order.phone_number === null ? order?.client?.telefono : order.phone_number}{" "}
                                        <a
                                            href={`https://wa.me/${order.phone}`}
                                        >
                                            <Icon icon="ri:whatsapp-line" />
                                        </a>
                                    </td>
                                    {order.all_person &&
                                    order.all_person !== null ? (
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleOpenModal(
                                                            order.all_person
                                                    )
                                                }
                                            >
                                                Datos
                                            </button>
                                        </td>
                                    ) : (
                                        <td></td>
                                    )}
                                    <td>
                                        {order?.cotizated === null ? (
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
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <></>
            )}

            {showModal && (
                <ModalPortal onClose={handleCloseModal} >
                        {modalData && modalData.length > 0 ? (
                            <div className="row">
                                <div className="col">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Nacimiento</th>
                                                <th>Sexo</th>
                                                <th>Covertura</th>
                                                <th>Provincia</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {modalData
                                                .map((value, key) => (
                                                    <tr key={key}>
                                                        <td>{value.name} {value.last_name}</td>
                                                        <td>{value.birthdate}</td>
                                                        <td>{value.sex}</td>
                                                        <td>{value.covert}</td>
                                                        <td>{value.province}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                </ModalPortal>
            )}

        {currentPage === 1 ? (
          <button
            style={{
              color: "#0d6efd",
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
              border: "none",
            }}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >{`⪢`}</button>
        )}
        </div>
    );
};

export default OrdersTableAll;
