import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { Icon } from "@iconify/react";
import ModalPortal from "../../modal";
import useUser from "../../hooks/UseUser";

const OrdersTableAll = () => {
    const { user } = useUser();
    const [ordersData, setOrdersData] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cuantityPage, setCuantityPage] = useState(0);
    const resultsPerPage = 7;
    const userId =
        user.type === "superadmin" ? "" : user.type === "admin" ? "" : user.id;
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
    
    const setOrders = ()=>{
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
    }

    const changeStatusOrder = (id, cotizated) =>{
        axios
            .put(
                `${process.env.REACT_APP_URI_API}/product/updateCotiStatus/${id}/${cotizated}`
            )
            .then((response) =>                
                setOrders()
            )
            .catch((error) => {
                console.error(error);
            });
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
                                        {order.email === null &&
                                        order?.client === null
                                            ? "Sin email"
                                            : order.email === null
                                            ? order?.client?.email
                                            : order.email}
                                    </td>
                                    <td data-label="Fecha">{order.date}</td>
                                    <td data-label="Telefono">
                                        {order.phone_number === null &&
                                        order?.client === null
                                            ? "sin numero"
                                            : order.phone_number === null
                                            ? order?.client?.telefono
                                            : order.phone_number}{" "}
                                        <a
                                            href={`https://wa.me/${order.phone}`}
                                        >
                                            <Icon icon="ri:whatsapp-line" />
                                        </a>
                                    </td>
                                    {order.all_person &&
                                    order.all_person !== null ? (
                                        <td data-label="Acción">
                                            {Array.isArray(order.all_person) ? ( // Verifica si es un array
                                                <button
                                                className="btn btn-sm btn-primary"
                                                    onClick={() =>
                                                        handleOpenModal(
                                                            order.all_person
                                                        )
                                                    }
                                                >
                                                    Datos
                                                </button>
                                            ) : (
                                                <button className="btn btn-sm btn-primary"
                                                    onClick={() =>
                                                        handleOpenModal(
                                                            order.all_person
                                                        )
                                                    }
                                                >
                                                    Datos
                                                </button>
                                            )}
                                        </td>
                                    ) : (
                                        <td data-label="Acción"><p>Sin Acción</p></td>
                                    )}
                                    <td data-label="Cotizado">
                                        {user.type === 'pas' ? (order?.cotizated === null ? (
                                            <p                                               
                                                style={{
                                                    color: "red",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                No se cotiza
                                            </p>
                                        ) : order?.cotizated === 0 ? (
                                            <button onClick={()=>changeStatusOrder(order?.id, order.cotizated)} className="btn btn-sm btn-danger"
                                            >
                                                Sin cotizar
                                            </button>
                                        ) : (
                                            <button onClick={()=>changeStatusOrder(order?.id, order.cotizated)}
                                            className="btn btn-sm btn-success"
                                            >
                                                Cotizado
                                            </button>
                                        ) ) : order?.cotizated === null ? (
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
                                                {Object.keys(modalData[0]).map(
                                                    (key) => (
                                                        <th key={key}>{key}</th>
                                                    )
                                                )}
                                            </tr>
                                        ) : (
                                            <tr>
                                                {Object.keys(modalData).map(
                                                    (key) => (
                                                        <th key={key} >{key}</th>
                                                    )
                                                )}
                                            </tr>
                                        )}
                                    
                                </thead>
                                <tbody>
                                    {Array.isArray(modalData) ? (
                                        <>
                                            {modalData.map((obj, i) => (
                                                <tr key={i}>
                                                    {Object.values(obj).map(
                                                        (value, index) => (
                                                            <td key={index} data-label={i}>
                                                                {value}
                                                            </td>
                                                        )
                                                    )}
                                                </tr>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {
                                                <tr>
                                                    {Object.values(
                                                        modalData
                                                    ).map((value, index) => (
                                                        <td key={index}>
                                                            {value}
                                                        </td>
                                                    ))}
                                                </tr>
                                            }
                                        </>
                                    )}
                                    {/* <tr>{Array.isArray(modalData) ? (
                                        Object.values(modalData).map()
                                        {Object.values(modalData).map(
                                            (value, index) => (
                                                <td key={index}>{value}</td>
                                            )
                                        )}
                                    </tr> */}
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
