import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { Icon } from "@iconify/react";

const OrdersTableAll = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    useEffect(() => {
        const idPas = "covery";
        const offset = (currentPage - 1) * resultsPerPage;

        axios
            .get(
                `${process.env.REACT_APP_URI_API}/product/getAllOrdersByPas/${idPas}`,
                {
                    params: {
                        page: currentPage,
                        limit: resultsPerPage,
                    },
                }
            )
            .then((response) => {
                let data = response.data.ordersData;
                setOrdersData(data);

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
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="container bg-light rounded-3 m-5 justify-content-center text-center mx-auto">
            {ordersData && ordersData.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* {Object.keys(ordersData[0]).map((column) => (
              <th key={column}>{column}</th>
            ))} */}
                            {/* Añade aquí las columnas adicionales que deseas mostrar */}
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
                            // let client = (order && order?.client !== null) ? JSON.parse(order.client) : null
                            return (
                                <tr key={order.id}>
                                    <td>{order.type}</td>
                                    <td>
                                        {order.client}
                                    </td>
                                    <td>
                                         {/* {client.email} */}
                                        {/* {order.email ||
                                        (client && client.email) ? (order.email || (order.client && client.email)) : (<i>{order.email}</i>
                                        )} */}
                                    </td>
                                    <td>{order.date}</td>
                                    <td>
                                        {order.phone}{" "}
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
                                                        JSON.parse(
                                                            order.all_person
                                                        )
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
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
                        {modalData && Object.keys(modalData).length > 0 ? (
                            <div className="row">
                                <div className="col">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(modalData)
                                                .slice(
                                                    0,
                                                    Math.ceil(
                                                        Object.keys(modalData)
                                                            .length / 2
                                                    )
                                                )
                                                .map(([key, value]) => (
                                                    <tr key={key}>
                                                        <td>{key}</td>
                                                        <td>{value}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(modalData)
                                                .slice(
                                                    Math.ceil(
                                                        Object.keys(modalData)
                                                            .length / 2
                                                    )
                                                )
                                                .map(([key, value]) => (
                                                    <tr key={key}>
                                                        <td>{key}</td>
                                                        <td>{value}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            )}

            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={ordersData.length < resultsPerPage}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default OrdersTableAll;
