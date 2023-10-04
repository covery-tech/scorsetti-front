import React, { useEffect, useState } from "react";
import useUser from "../../../../hooks/UseUser";
import axios from "axios";
import { Icon } from "@iconify/react";

export const TableOrders = () => {
  const { jwt, user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [showShowMore, setShowShowMore] = useState(true);
  useEffect(() => {
    if (!orders.flat().length) {
      setLoading(true);
    }
    setLoadingNextPage(true);
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/getMyProductsSale/${user.id_user}/${page}`,
      headers: { token: jwt },
    };
    axios(config)
      .then((e) => {
        if (e.data.length === 0 || e.data.length < 6) setShowShowMore(false);
        setLoading(false);
        setLoadingNextPage(false);
        setOrders([...orders, e.data]);
      })
      .catch((e) => {
        setLoadingNextPage(false);
        setLoading(false);
        alert("error de servidor: Not Found");
      });
  }, [page]);

  return (
    <div className="w-100 h-100 pre">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Estado del Pago</th>
            <th scope="col">Tipo de póliza</th>
          </tr>
        </thead>
        {orders.flat()?.length ? (
          <tbody>
            {orders.flat().map((e, i) => (
              <tr key={i}>
                <td>
                  {e?.name}, {e?.last_name}
                </td>
                <td>
                  {e?.phone_number}
                  <a
                    href={`https://wa.me/+549${e?.phone_number}`}
                    target="_blank"
                  >
                    <Icon icon="ic:baseline-whatsapp" height="24" />
                  </a>
                </td>
                <td>{e?.email}</td>
                <td>{e?.status_payment} </td>
                <td>{e?.type}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <></>
        )}
      </table>
      <div className="tc mb1 mt3">
        {showShowMore ? (
          loadingNextPage ? (
            <strong>Cargando...</strong>
          ) : (
            <strong
              onClick={() => setPage((prev) => prev + 1)}
              style={{ color: "#0d6efd", cursor: "pointer" }}
            >
              mostrar mas resultados
            </strong>
          )
        ) : (
          <p style={{ color: "var(--color-first-light-one)" }}>
            Oops parece que ha llegado al final
          </p>
        )}
      </div>
    </div>
  );
};
