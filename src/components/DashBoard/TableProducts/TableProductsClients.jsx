import React, { useEffect, useState } from "react";
import axios from "axios";
import useUser from "../../hooks/UseUser";
import ModalPortal from "../../modal";
import { Icon } from "@iconify/react";

export const TableProductsClients = () => {
  const { jwt } = useUser();
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getMyProducts = async () => {
      try {
        const headers = {
          Token: jwt,
        };

        const options = {
          url: `${process.env.REACT_APP_URI_API}/product/getMyProductsBuy/1`,
          method: "GET",
          headers: headers,
        };

        const response = await axios(options);
        //(response.data);
        setDetails(response.data);
        // setProduct(response.data);
      } catch (error) {
        //(error);
      }
    };

    getMyProducts();
  }, []);

  return (
    <div className="container bg-light rounded-3 m-5 justify-content-center text-center mx-auto">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Seguro</th>
            <th scope="col">Producto</th>
            <th scope="col">Beneficiarios</th>
            <th scope="col">Finalización</th>
            <th scope="col">Estado pago</th>
            <th scope="col">Solicitar Baja</th>
          </tr>
        </thead>
        <tbody>
          {details.length ? (
            details.map((detail, i) => {
              let benef = JSON.parse(details[i].all_person);
              return (
                <tr key={detail.id}>
                  <td>{detail.covert}</td>
                  <td>{detail.type}</td>
                  <td>
                    {benef.length}
                    <Icon
                      icon="ic:outline-remove-red-eye"
                      onClick={() => setSelectedBenefit(i)}
                    />
                    {selectedBenefit === i && (
                      <ModalPortal onClose={() => setSelectedBenefit(null)}> <h3 className="text-center">Beneficiarios</h3>
                        <div className="bg-light justify-content-center text-center ">                         
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Desde</th>
                                <th scope="col">Hasta</th>
                                <th scope="col">Beneficiario</th>
                                <th scope="col">Destino</th>                                
                              </tr>
                            </thead>
                            {benef.map((b) => (
                              <tbody>
                                <tr key={b.id}>
                                  <td>{b.since}</td>
                                  <td>{b.to}</td>
                                  <td>{b.name}</td>
                                  <td>{b.destiny}</td>
                                </tr>
                              </tbody>
                            ))}
                          </table>
                        </div>
                      </ModalPortal>
                    )}
                  </td>
                  <td>{detail.to}</td>
                  <td>{detail.status_payment==="pending" ? "Pendiente" : "Pagado"}</td>
                  <td>
                    <a className="btn btn-danger btn-sm">Baja</a>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}
