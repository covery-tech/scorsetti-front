import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../../hooks/UseUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TableNotiClient = ({
  notis,
  setPage,
  loading,
  showShowMore,
  loadingNextPage,
  setLoading,
  setLoadingNextPage,
  setNotis,
  page,
  setShowShowMore,
  deleteNoti
}) => {
  const { jwt } = useUser();
  const navigate = useNavigate();

  const getNotis = () => {
    const config = {
      method: "get",
      baseURL: `${process.env.REACT_APP_URI_API}/product/getNotificationClient/${page}`,
      headers: { token: jwt },
    };
    axios(config)
      .then((e) => {
        if (e.data.length === 0 || e.data.length < 6) setShowShowMore(false);
        setLoading(false);
        setLoadingNextPage(false);
        setNotis(notis.concat(e.data));
      })
      .catch((e) => {
        setLoadingNextPage(false);
        setLoading(false);
        alert("error de servidor: Not Found");
      });
  };

  useEffect(() => {
    if (!notis?.length) {
      setLoading(true);
    }
    setLoadingNextPage(true);
    getNotis();
  }, [page]);

 
  return (
    <div className="container bg-light rounded-3 m-5 justify-content-center text-center mx-auto">
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Descripción</th>
              <th scope="col">Eliminar Notificación</th>
            </tr>
          </thead>
          {notis?.length ? (
            <tbody>
              {notis?.map((e) => (
                <tr key={e?.id}>
                  <td>{e?.description}</td>
                  <td>
                    <strong
                      style={{ color: "#dc3545", cursor: "pointer" }}
                      onClick={() => deleteNoti(e?.id, "notification_client")}
                    >
                      Eliminar
                    </strong>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <></>
          )}
        </table>
      )}
      {showShowMore ? (
        loadingNextPage ? (
          <strong>cargando...</strong>
        ) : (
          <strong
            onClick={() => setPage((prev) => prev + 1)}
            style={{ color: "#0d6efd", cursor: "pointer" }}
          >
            mostrar mas resultados
          </strong>
        )
      ) : (
        <strong>Ops parece que a llegado al final</strong>
      )}
    </div>
  );
};
