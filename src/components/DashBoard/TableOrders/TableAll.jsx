import React, { useEffect, useState } from "react";
import axios from "axios";

const OrdersTableAll = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const idPas = "covery"; // Puedes obtenerlo de la ruta o de cualquier otra fuente

    axios
      .get(
        `${process.env.REACT_APP_URI_API}/product/getAllOrdersByPas/${idPas}`
      )
      .then((response) => {
        const data = response.data.ordersData;
        console.log(data);
        setOrdersData(data);
      })
      .catch((error) => {
        console.error(error);
        // Manejo del error
      });
  }, []);
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
              {/* {Object.keys(ordersData[0]).map((column) => (
              <th key={column}>{column}</th>
            ))} */}
              {/* Añade aquí las columnas adicionales que deseas mostrar */}
              <th>id</th>
              <th>Producto</th>
              <th>Nombre y Apellido</th>
              <th>Email</th>
              <th>Fecha</th>
              <th>Telefono</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.type}</td>
                <td>
                  {order.all_person && order.all_person.length > 0 ? (
                    <>
                      {order.all_person[0].name} {order.all_person[0].last_name}
                    </>
                  ) : (
                    <></>
                  )}
                </td>
                <td>{order.email}</td>
                <td>{order.date}</td>
                <td>{order.phone}</td>
                {order.all_person && order.all_person !== null ? (
                  <td>
                    <button onClick={() => handleOpenModal(JSON.parse(order.all_person))}>
                      Ver JSON
                    </button>
                  </td>
                ) : (                  
                  <td>
                    <button onClick={() => handleOpenModal(JSON.parse(order.all_person[0]))}>
                      Más datos
                    </button>
                  </td>
                )}
              </tr>
            ))}
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
                  <th>Clave</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(modalData).slice(0, Math.ceil(Object.keys(modalData).length / 2)).map(([key, value]) => (
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
                  <th>Clave</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(modalData).slice(Math.ceil(Object.keys(modalData).length / 2)).map(([key, value]) => (
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



    </div>
  );
};

export default OrdersTableAll;
